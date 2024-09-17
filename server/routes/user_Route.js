const express = require('express');
const router = express.Router();
const { regisUser, loginUser, getUser } = require('../controller/user.controller');
const { verifyUser } = require('../middleware/middleware');

router.post('/Register', regisUser);
router.post('/Login', loginUser);

router.route('/me').get([verifyUser], getUser);

module.exports = router;
