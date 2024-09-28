const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    userName: String,
    password: String,
});

const Admin = mongoose.model('admins', adminSchema);
module.exports = Admin;
