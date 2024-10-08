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
    addVoucher,
    getVoucherList,
    getVoucherDetail,
    updateVoucher,
    deleteVoucher,
} = require('../controller/admin.controller');

router.post('/Login', loginAdmin);
router.get('/bill', getBillList);
router.get('/bill/:id', getBillDetail);
router.put('/bill/:id', changeState);

router.post('/getProduct', getProductList);
router.get('/product/:id', getProductDetail);
router.post('/product', addProduct);
router.put('/editProduct/:id', editProduct);
router.delete('/product', deleteProduct);

router.post('/voucher', addVoucher);
router.post('/getVoucher', getVoucherList);
router.get('/voucher/:id', getVoucherDetail);
router.put('/voucher/:id', updateVoucher);
router.delete('/voucher/:id', deleteVoucher);

module.exports = router;
