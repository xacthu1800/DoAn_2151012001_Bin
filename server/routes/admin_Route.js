const express = require('express');
const router = express.Router();

const { loginAdmin, getBillList, getBillDetail } = require('../controller/admin.controller');

router.post('/Login', loginAdmin);
router.get('/bill', getBillList);
router.get('/bill/:id', getBillDetail);

module.exports = router;
