const Admin = require('../models/admin');
const { newToken_Admin } = require('../utils/utility.function');

const loginAdmin = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const admin = await Admin.find();
        const Mongo_admin_UserName = admin[0].userName;
        const Mongo_admin_password = admin[0].password;

        if (userName !== Mongo_admin_UserName) {
            return res.status(400).json({ status: 'error', message: 'Admin not found' });
        }

        if (password !== Mongo_admin_password) {
            return res.status(400).json({ status: 'error', message: 'Password is incorrect' });
        }
        let token = newToken_Admin(userName);

        res.status(200).json({ status: 'success', message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Login failed', error });
    }
};

module.exports = {
    loginAdmin,
};
