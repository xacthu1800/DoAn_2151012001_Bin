const Product = require('../models/product');

const getProduct = async (req, res) => {
    const productList = await Product.find();
    console.log(productList);
    res.json(productList);
};

module.exports = {
    getProduct,
};
