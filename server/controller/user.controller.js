const User = require('../models/user');
const Checkout = require('../models/checkout');
const Cart = require('../models/cart');
const Voucher = require('../models/voucher');
const { OAuth2Client } = require('google-auth-library');

const { newToken, newToken_Agent } = require('../utils/utility.function');

const clientId = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(clientId);

async function verify(tokenId) {
    const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: clientId,
    });
    const payload = ticket.getPayload();
    console.log('payload:' + payload);
    return payload;
}

const regisUser = async (req, res) => {
    const { userName, password, role } = req.body;
    //console.log(req.body);

    const user = await User.findOne({ userName, role });
    try {
        if (user) {
            return res.status(400).json({ status: 'error', message: 'Tên người dùng đã tồn tại' });
        }

        if (role === 'user') {
            await User.create({ userName, password, ordered: '0', cumulativeTotal: '0', class: '0', role: 'user' });
        } else if (role === 'agent') {
            await User.create({ userName, password, ordered: '0', cumulativeTotal: '0', class: '0', role: 'agent' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 'error', message: 'Đăng ký thất bại' });
    }
    const data = await User.find();
    //console.log(data);
    res.status(200).json({ status: 'ok', message: 'Đăng ký thành công' });
};

const loginUser = async (req, res) => {
    const { userName, password, role } = req.body;
    const user = await User.findOne({ userName, role });
    if (role == 'agent' && user) {
        let token = newToken_Agent(user);
        res.status(200).send({ status: 'ok', token });
    } else {
        res.status(401).json({ message: 'Mật khẩu không đúng' });
    }

    if (role == 'user' && user) {
        if (user.password === password) {
            let token = newToken(user);
            res.status(200).send({ status: 'ok', token });
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
            state: req.body.state,
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

        console.log('voucher: ' + req.body.voucher);

        const findVoucher = await Voucher.find({ code: req.body.voucher });
        if (findVoucher.length > 0) {
            try {
                if (Number(findVoucher[0].used) < Number(findVoucher[0].quantity)) {
                    await Voucher.updateOne(
                        { code: req.body.voucher },
                        {
                            used: (Number(findVoucher[0].used) + 1).toString(),
                        },
                    );
                } else {
                    console.log('Voucher đã hết hạn');
                }
            } catch (error) {
                console.log('Cập nhật số lần sử dụng voucher thất bại');
            }
        }

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

const getHomePage = async (req, res) => {
    const userId = req.params.id;

    try {
        //const checkOut = await Checkout.find({ userId: userId });
        const checkOut = await Checkout.find({ userId });
        const user = await User.find({ _id: userId });

        // [{'x':[{'x1': '', 'x2': '' }, 'time': '12-12-2024']}, {{'y':[{'y1': '', 'y2': ''}, 'time': '12-12-2024']}}]

        const userOrderedList = checkOut.map((item1) => {
            return item1.cartItems.map((item2) => {
                return {
                    ...item2,
                    time: item1.time,
                    state: item1.state,
                };
            });
        });
        /*  console.log(checkOut);
        console.log('0------------------------------------------');
        console.log(userOrderedList); */

        res.status(200).json({ message: 'getHompage success', userOrderedList, user });
    } catch (error) {
        res.status(500).json({ message: 'getHompage fail', error });
    }
};

const changePassword = async (req, res) => {
    const { oldPass, newPass } = req.body;
    const userId = req.params.id;
    try {
        const user = await User.find({ _id: userId });
        if (user) {
            if (user[0].password == oldPass) {
                console.log('Đổi mật khẩu thành công');
                await User.updateOne({ _id: userId }, { password: newPass });
                res.status(200).json({ status: 'ok', message: 'Đổi mật khẩu thành công' });
            } else {
                console.log('Mật khẩu cũ không đúng');
                res.json({ status: 'error', message: 'Mật khẩu cũ không đúng' });
            }
        }
        // Test userId, oldPass, newPass, user[0].password
        {
            /* console.log(user);
            console.log(user[0].password);
            console.log(oldPass);
            console.log(newPass); */
        }
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Đổi mật khẩu thất bại', error });
    }
};

const checkVoucher = async (req, res) => {
    const { voucherCode } = req.body;
    //console.log(voucherCode);
    const findVoucher = await Voucher.find({ code: voucherCode });
    console.log('findVoucher: ', findVoucher);
    if (findVoucher.length == 0) {
        return res.status(404).json({ status: 'error', message: 'Mã giảm giá không hợp lệ' });
    }
    if (findVoucher[0].used >= findVoucher[0].quantity) {
        return res.status(405).json({ status: 'error', message: 'Mã giảm giá đã hết hạn' });
    }
    if (findVoucher.length > 0) {
        return res.status(200).json({ status: 'ok', message: 'Mã giảm giá hợp lệ', voucherData: findVoucher });
    } else {
        return res.status(404).json({ status: 'error', message: 'Mã giảm giá không hợp lệ' });
    }
};

const loginWithGoogle = async (req, res) => {
    const { tokenId } = req.body;
    const ticket = await verify(tokenId);
    console.log('ticket: ', ticket);
    const user = await User.findOne({ userName: ticket.email });
    if (user) {
        let token = newToken(user);
        //console.log(token);
        return res.status(200).send({ status: 'ok', token });

        /* console.log('success');
            res.json({ message: 'success Login!!!' }); */
    } else {
        return res.status(404).json({ message: 'Tên người dùng không tồn tại' });
    }
};

const registerWithGoogle = async (req, res) => {
    const { tokenId } = req.body;
    const ticket = await verify(tokenId);
    console.log('ticket: ', ticket);
    const user = await User.findOne({ userName: ticket.email });
    if (user) {
        return res.status(400).json({ message: 'Tên người dùng đã tồn tại' });
    }
    await User.create({ userName: ticket.email, password: '', ordered: '0', cumulativeTotal: '0', class: '0' });
    const data = await User.find();
    //console.log(data);
    return res.status(200).send({ status: 'ok', message: 'Đăng ký thành công' });
};

module.exports = {
    regisUser,
    loginUser,
    getUser,
    checkoutUser,
    getHomePage,
    changePassword,
    checkVoucher,
    loginWithGoogle,
    registerWithGoogle,
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
