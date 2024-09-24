const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    ordered: String,
    cumulativeTotal: String,
    class: String,
});

const User = mongoose.model('users', userSchema);
module.exports = User;
