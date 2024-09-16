const express = require('express');
const { regisUser, loginUser } = require('../controller/user.controller');

const router = express.Router();

router.post('/Register', regisUser);
router.post('/Login', loginUser);

module.exports = router;
