const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    productType: String,
    productImage: String,
    productPrice: String,
    screenSize: String,
    displayTech: String,
    chipset: String,
    ramCapacity: String,
    internalStorage: String,
    productCountInStock: Number,
    agentName: String,
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;
