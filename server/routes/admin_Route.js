const express = require('express');
const router = express.Router();

const {
    loginAdmin,
    getBillList,
    getBillDetail,
    changeState,
    getProductList,
    addProduct,
    editProduct,
    getProductDetail,
    deleteProduct,
} = require('../controller/admin.controller');

router.post('/Login', loginAdmin);
router.get('/bill', getBillList);
router.get('/bill/:id', getBillDetail);
router.put('/bill/:id', changeState);

router.get('/product', getProductList);
router.get('/product/:id', getProductDetail);
router.post('/product', addProduct);
router.put('/editProduct/:id', editProduct);
router.delete('/product', deleteProduct);

module.exports = router;
