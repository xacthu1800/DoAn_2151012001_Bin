const express = require('express');
const router = express.Router();
const { createPaymentZalo, callbackPaymentZalo, orderStatus } = require('../controller/payment.controller');

router.post('/', createPaymentZalo);
router.post('/callback', callbackPaymentZalo);
router.post('/order-status/:app_tran_id', orderStatus);

module.exports = router;
