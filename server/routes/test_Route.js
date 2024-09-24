const express = require('express');
const router = express.Router();

// controller
const Cart = require('../models/cart');
const Checkout = require('../models/checkout');
const User = require('../models/user');

const test = async (req, res) => {
    const userId = '66f2bdce2a73d77896f3815c';

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
                };
            });
        });

        console.log(userOrderedList);

        res.status(200).json({ message: 'Đặt hàng thành công', userOrderedList, user });
    } catch (error) {
        res.status(500).json({ message: 'Đặt hàng thất bại', error });
    }
};

router.get('/', test);

module.exports = router;
