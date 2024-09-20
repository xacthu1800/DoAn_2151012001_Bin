const express = require('express');
const router = express.Router();

const { getProduct, getProductById } = require('../controller/product.controller');

router.get('/', getProduct);
router.get('/:id', getProductById);

module.exports = router;
