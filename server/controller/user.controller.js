const User = require('../models/user');
const Checkout = require('../models/checkout');

const { checkPassword, newToken } = require('../utils/utility.function');

const regisUser = async (req, res) => {
    const { userName, password } = req.body;
    //console.log(req.body);

    await User.create({ userName, password });
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
    /* const userCart = cartItems.map((item) => {
        return {
            userId: id,
            productId: item.product,
            count: item.qty,
        };
    });

    console.log(userCart); */
    console.log(req.body);
    console.log(req.params.id);
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
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'error', message: error.message });
    }
    console.log('Đặt hàng thành công');
    res.status(200).send({ status: 'ok', message: 'Đặt hàng thành công' });
};

module.exports = {
    regisUser,
    loginUser,
    getUser,
    checkoutUser,
};
