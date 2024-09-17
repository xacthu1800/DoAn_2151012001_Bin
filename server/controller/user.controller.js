const User = require('../models/user');
const { checkPassword, newToken } = require('../utils/utility.function');

const regisUser = async (req, res) => {
    const { userName, password } = req.body;
    console.log(req.body);

    await User.create({ userName, password });
    const data = await User.find();
    console.log(data);
    res.json(data);
};

const loginUser = async (req, res) => {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (user) {
        if (user.password === password) {
            let token = newToken(user);
            //console.log(token);
            res.status(200).send({ status: 'ok', token });

            /* console.log('success');
            res.json({ message: 'success Login!!!' }); */
        } else {
            res.status(401).json({ message: 'Mật khẩu không đúng' });
        }
    } else {
        res.status(404).json({ message: 'Tên người dùng không tồn tại' });
    }
};

const getUser = async (req, res) => {
    res.status(200).send({ user: req.user });
};

module.exports = {
    regisUser,
    loginUser,
    getUser,
};
