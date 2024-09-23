const express = require('express');
const router = express.Router();
const { regisUser, loginUser, getUser, checkoutUser } = require('../controller/user.controller');
const { verifyUser } = require('../middleware/middleware');

router.post('/Register', regisUser);
router.post('/Login', loginUser);

router.route('/me').get([verifyUser], getUser);

router.post('/checkout/:id', checkoutUser);

module.exports = router;
