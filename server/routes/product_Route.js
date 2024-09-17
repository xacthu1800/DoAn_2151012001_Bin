const express = require('express');
const router = express.Router();

const { getProduct } = require('../controller/product.controller');

router.get('/', getProduct);

module.exports = router;
