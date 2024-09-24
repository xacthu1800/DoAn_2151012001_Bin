const User = require('../models/user');
const Checkout = require('../models/checkout');
const Cart = require('../models/cart');

const { checkPassword, newToken } = require('../utils/utility.function');

const regisUser = async (req, res) => {
    const { userName, password } = req.body;
    //console.log(req.body);

    await User.create({ userName, password, ordered: '0', cumulativeTotal: '0', class: '0' });
    const data = await User.find();
    //console.log(data);
    res.json(data);
};

const loginUser = async (req, res) => {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (user) {
        if (user.password === password) {
            let token = newToken(user);
            //console.log(token);
            res.status(200).send({ status: 'ok', token });

            /* console.log('success');
            res.json({ message: 'success Login!!!' }); */
        } else {
            res.status(401).json({ message: 'Mật khẩu không đúng' });
        }
    } else {
        res.status(404).json({ message: 'Tên người dùng không tồn tại' });
    }
};

const getUser = async (req, res) => {
    res.status(200).send({ user: req.user });
};

const checkoutUser = async (req, res) => {
    const { cartItems } = req.body;

    const totalItem = cartItems.reduce((total, item) => total + item.qty, 0);
    /*  console.log(totalItem);
    console.log(req.body);
    console.log(req.params.id); */

    try {
        await Checkout.create({
            userId: req.params.id,
            cartItems,
            userFullname: req.body.userFullname,
            userAddress: req.body.userAddress,
            userPhoneNumber: req.body.userPhoneNumber,
            userNote: req.body.userNote,
            userPayment: req.body.userPayment,
            discount: req.body.discount,
            shipping: req.body.shipping,
            sumPrice: req.body.sumPrice,
            time: String(getCurrentTime()),
        });

        const user = await User.find({ _id: req.params.id });

        // IF chỗ này điều kiện nếu cumulative trên các bậc thì cập nhật thăng class cho user

        await User.updateOne(
            { _id: req.params.id },
            {
                ordered: (Number(user[0].ordered) + totalItem).toString(),
                cumulativeTotal: (Number(user[0].cumulativeTotal) + Number(req.body.sumPrice)).toString(),
            },
        );

        const cumulativeAfter = Number(user[0].cumulativeTotal) + Number(req.body.sumPrice);

        if (cumulativeAfter < 10000000) {
            await User.updateOne(
                { _id: req.params.id },
                {
                    class: '0',
                },
            );
        }
        if (cumulativeAfter >= 10000000 && cumulativeAfter < 50000000) {
            await User.updateOne(
                { _id: req.params.id },
                {
                    class: '1',
                },
            );
        }
        if (cumulativeAfter >= 50000000 && cumulativeAfter < 100000000) {
            await User.updateOne(
                { _id: req.params.id },
                {
                    class: '2',
                },
            );
        }
        if (cumulativeAfter >= 100000000) {
            await User.updateOne(
                { _id: req.params.id },
                {
                    class: '3',
                },
            );
        }
        await Cart.deleteMany({ userId: req.params.id });

        console.log('Đặt hàng thành công - SERVER');
        res.status(200).send({ status: 'ok', message: 'Đặt hàng thành công' });
    } catch (error) {
        console.log('Đặt hàng thất bại - SERVER');
        console.log(error);
        res.status(500).send({ status: 'error', message: error.message });
    }
};

module.exports = {
    regisUser,
    loginUser,
    getUser,
    checkoutUser,
};

const getCurrentTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
};
