const express = require('express');
const router = express.Router();

// controller
const Cart = require('../models/cart');
const Checkout = require('../models/checkout');
const User = require('../models/user');

const test = async (req, res) => {
    const userId = '66f2878b2b264fb0fa5061d8';

    try {
        const checkOut = await Checkout.find({ userId: userId });

        const user = await User.find({ _id: userId });

        const cartItemLoop = checkOut.map((cart) => {
            return {
                cartItems: cart.cartItems,
                time: cart.time,
            };
        });
        // [{'x':[{'x1': '', 'x2': '' }, 'time': '12-12-2024']}, {{'y':[{'y1': '', 'y2': ''}, 'time': '12-12-2024']}}]

        //res.status(200).json({ message: 'Đặt hàng thành công', user, checkOut });
        //console.log(cartItemLoop);
        res.status(200).json({ message: 'Đặt hàng thành công', checkOut });
    } catch (error) {
        res.status(500).json({ message: 'Đặt hàng thất bại', error });
    }
};

router.get('/', test);

module.exports = router;
