const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
    code: String,
    quantity: String,
    discountPercentage: String,
    startDate: String,
    endDate: String,
    maxDiscount: String,
    used: String,
});

const Voucher = mongoose.model('vouchers', voucherSchema);

module.exports = Voucher;
