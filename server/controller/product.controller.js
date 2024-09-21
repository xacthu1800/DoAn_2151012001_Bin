const Product = require('../models/product');

const getProduct = async (req, res) => {
    const productList = await Product.find();
    //console.log(productList);
    res.json(productList);
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        console.log('getProductByID from server - api/product/:id');
        console.log(product);

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getProduct,
    getProductById,
};
