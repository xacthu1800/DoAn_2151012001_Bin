const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        productId: {
            type: mongoose.Types.ObjectId,
            ref: 'product',
            required: true,
        },
        productType: {
            type: String,
            required: true,
        },
        count: {
            type: Number,

            required: true,
        },
        productName: {
            type: String,
            required: true,
        },
        productPrice: {
            type: String,
            required: true,
        },
        productImage: {
            type: String,
            required: true,
        },
        productCountInStock: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Cart = mongoose.model('cart', cartSchema);
module.exports = Cart;
