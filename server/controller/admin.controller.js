const Admin = require('../models/admin');
const Checkout = require('../models/checkout');
const Product = require('../models/product');
const { newToken_Admin } = require('../utils/utility.function');

const loginAdmin = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const admin = await Admin.find();
        const Mongo_admin_UserName = admin[0].userName;
        const Mongo_admin_password = admin[0].password;

        if (userName !== Mongo_admin_UserName) {
            return res.status(400).json({ status: 'error', message: 'Admin not found' });
        }

        if (password !== Mongo_admin_password) {
            return res.status(400).json({ status: 'error', message: 'Password is incorrect' });
        }
        let token = newToken_Admin(userName);

        res.status(200).json({ status: 'success', message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Login failed', error });
    }
};

const getBillList = async (req, res) => {
    try {
        const billList = await Checkout.find();
        //console.log(billList);
        res.status(200).json({ status: 'success', message: 'Get bill list successful', billList });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Get bill list failed', error });
    }
};

const getBillDetail = async (req, res) => {
    try {
        const billDetail = await Checkout.findById(req.params.id);

        res.status(200).json({ status: 'success', message: 'Get bill detail successful', billDetail });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Get bill detail failed', error });
    }
};

const changeState = async (req, res) => {
    try {
        await Checkout.findByIdAndUpdate(req.params.id, { state: req.body.state });
        console.log('sucesss');
        res.status(200).json({ status: 'success', message: 'Change state successful' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Change state failed', error });
    }
};

const getProductList = async (req, res) => {
    try {
        const productList = await Product.find();
        //console.log(productList);
        res.status(200).json({
            status: 'success',
            message: 'Get product list successful',
            productList: productList.reverse(),
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Get product list failed', error });
    }
};

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        //console.log(product);
        res.status(200).json({ status: 'success', message: 'Add product successful', product });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Add product failed', error });
    }
};

const editProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ status: 'success', message: 'Edit product successful', product });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Edit product failed', error });
    }
};

const getProductDetail = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({ status: 'success', message: 'Get product detail successful', product });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Get product detail failed', error });
    }
};

module.exports = {
    loginAdmin,
    getBillList,
    getBillDetail,
    changeState,
    getProductList,
    addProduct,
    editProduct,
    getProductDetail,
};
