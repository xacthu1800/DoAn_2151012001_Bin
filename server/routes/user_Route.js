const express = require('express');
const router = express.Router();
const {
    regisUser,
    loginUser,
    getUser,
    checkoutUser,
    getHomePage,
    changePassword,
    checkVoucher,
} = require('../controller/user.controller');
const { verifyUser } = require('../middleware/middleware');

router.post('/Register', regisUser);
router.post('/Login', loginUser);

router.route('/me').get([verifyUser], getUser);

router.post('/checkout/:id', checkoutUser);

router.get('/HomePage/:id', getHomePage);

router.put('/ChangePassword/:id', changePassword);

router.post('/voucher', checkVoucher);

module.exports = router;
