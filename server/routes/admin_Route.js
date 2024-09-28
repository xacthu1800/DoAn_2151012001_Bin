const express = require('express');
const router = express.Router();

const { loginAdmin } = require('../controller/admin.controller');

router.post('/Login', loginAdmin);

module.exports = router;
