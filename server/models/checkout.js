const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        cartItems: {
            type: Array,
            required: true,
        },
        userFullname: {
            type: String,
            required: true,
        },
        userAddress: {
            type: String,
            required: true,
        },
        userPhoneNumber: {
            type: String,
            required: true,
        },
        userNote: {
            type: String,
            required: true,
        },
        userPayment: {
            type: String,
            required: true,
        },
        discount: {
            type: String,
            required: true,
        },
        shipping: {
            type: String,
            required: true,
        },
        sumPrice: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Checkout = mongoose.model('checkouts', checkoutSchema);
module.exports = Checkout;
