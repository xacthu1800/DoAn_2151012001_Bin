const User = require('../models/user');
const Checkout = require('../models/checkout');
const Cart = require('../models/cart');
const Voucher = require('../models/voucher');
const Product = require('../models/product');
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
    console.log(req.body);
    const user = await User.findOne({ userName, role });
    if (role == 'agent' && user) {
        let token = newToken_Agent(user);
        console.log(token);
        return res.status(200).send({ status: 'ok', token });
    }
    if (role == 'user' && user) {
        if (user.password === password) {
            let token = newToken(user);
            return res.status(200).send({ status: 'ok', token });
        } else {
            return res.status(401).json({ message: 'Mật khẩu không đúng' });
        }
    }
    return res.status(404).json({ message: 'Tên người dùng không tồn tại' });
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

    const createListObject = async (cartItems) => {
        const listObject = await Promise.all(
            cartItems.map(async (item) => {
                const product = await Product.findById(item.product); // Assuming Product is your Mongoose model
                return {
                    agentName: product ? product.agentName : null, // Get agentName or null if not found
                    ...item, // Spread the cart item properties
                };
            }),
        );
        return listObject;
    };

    const listObject = await createListObject(cartItems);
    const listAgent = [...new Set(listObject.map((item) => item.agentName))];
    /*  console.log(listObject);
    console.log(listAgent); */

    try {
        await Promise.all(
            listAgent.map(async (agent) => {
                // Use Promise.all to handle all agent processing
                const listProductAgent = listObject.filter((item) => item.agentName === agent);
                const sumPriceAfter = listProductAgent.reduce(
                    (total, item) => total + Number(item.price) * Number(item.qty),
                    0,
                );

                try {
                    await Checkout.create({
                        userId: req.params.id,
                        agentName: agent,
                        cartItems: listProductAgent,
                        userFullname: req.body.userFullname,
                        userAddress: req.body.userAddress,
                        userPhoneNumber: req.body.userPhoneNumber,
                        userNote: req.body.userNote,
                        userPayment: req.body.userPayment,
                        discount: req.body.discount,
                        shipping: req.body.shipping,
                        sumPrice: sumPriceAfter,
                        time: String(getCurrentTime()),
                        state: req.body.state,
                    });
                } catch (error) {
                    console.error(`Error creating checkout for agent ${agent}:`, error); // More specific error logging
                }
            }),
        );

        const user = await User.findById(req.params.id); // Use findById for clarity
        await User.updateOne(
            { _id: req.params.id },
            {
                ordered: (Number(user.ordered) + totalItem).toString(),
                cumulativeTotal: (Number(user.cumulativeTotal) + Number(req.body.sumPrice)).toString(),
            },
        );

        const cumulativeAfter = Number(user.cumulativeTotal) + Number(req.body.sumPrice);

        // Update user class based on cumulative total
        let userClass;
        if (cumulativeAfter < 10000000) {
            userClass = '0';
        } else if (cumulativeAfter < 50000000) {
            userClass = '1';
        } else if (cumulativeAfter < 100000000) {
            userClass = '2';
        } else {
            userClass = '3';
        }
        await User.updateOne({ _id: req.params.id }, { class: userClass });

        await Cart.deleteMany({ userId: req.params.id });

        console.log('Đặt hàng thành công - SERVER');
        res.status(200).send({ status: 'ok', message: 'Đặt hàng thành công' });
    } catch (error) {
        console.error('Error during checkout process:', error); // General error logging for the entire process
        res.status(500).send({ status: 'error', message: 'Đặt hàng thất bại', error: error.message });
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
    const { tokenId, role } = req.body;
    const ticket = await verify(tokenId);
    console.log('ticket: ', ticket);
    const user = await User.findOne({ userName: ticket.email, role });
    if (user) {
        return res.status(400).json({ message: 'Tên người dùng đã tồn tại' });
    }
    await User.create({ userName: ticket.email, password: '', ordered: '0', cumulativeTotal: '0', class: '0', role });
    const data = await User.find();
    //console.log(data);
    return res.status(200).send({ status: 'ok', message: 'Đăng ký thành công' });
};

const getAllUser = async (req, res) => {
    const users = await User.find();
    console.log('users: ', users);
    return res.status(200).json({ status: 'ok', users });
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
    getAllUser,
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
