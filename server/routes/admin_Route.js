const express = require('express');
const router = express.Router();

const { loginAdmin, getBillList, getBillDetail, changeState } = require('../controller/admin.controller');

router.post('/Login', loginAdmin);
router.get('/bill', getBillList);
router.get('/bill/:id', getBillDetail);

router.put('/bill/:id', changeState);

module.exports = router;
