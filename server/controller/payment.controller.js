const axios = require('axios').default; // npm install axios
const CryptoJS = require('crypto-js'); // npm install crypto-js
const { v4: uuidv4 } = require('uuid'); // npm install uuid
const moment = require('moment'); // npm install moment
const qs = require('qs');

const config = {
    appid: process.env.ZALO_APP_ID,
    key1: process.env.ZALO_KEY1,
    key2: process.env.ZALO_KEY2,
    endpoint: process.env.ZALO_ENDPOINT,
};

const createPaymentZalo = async (req, res) => {
    console.log('req.body: ', req.body);
    const { sumPrice } = req.body;
    const embeddata = {
        redirecturl: `${process.env.REDIRECT_URL}/callback-checkout`,
    };

    const items = [
        {
            itemid: 'knb',
            itemname: 'kim nguyen bao',
            itemprice: 198400,
            itemquantity: 1,
        },
    ];

    const order = {
        appid: config.appid,
        apptransid: `${moment().format('YYMMDD')}_${uuidv4()}`, // mã giao dich có định dạng yyMMdd_xxxx
        appuser: 'demo',
        apptime: Date.now(), // miliseconds
        item: JSON.stringify(items),
        embeddata: JSON.stringify(embeddata),
        amount: sumPrice,
        description: 'ZaloPay Integration ',
        bankcode: '',
        CallbackURL: `${process.env.REDIRECT_URL}/create-payment-zalo/callback`,
    };

    // appid|apptransid|appuser|amount|apptime|embeddata|item
    const data =
        config.appid +
        '|' +
        order.apptransid +
        '|' +
        order.appuser +
        '|' +
        order.amount +
        '|' +
        order.apptime +
        '|' +
        order.embeddata +
        '|' +
        order.item;
    order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

    try {
        const result = await axios.post(config.endpoint, null, { params: order });
        console.log('result: ', result.data);
        return res.status(200).json({ status: 'ok', result: result.data, apptransid: order.apptransid });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ status: 'error', message: error.message });
    }
};

const callbackPaymentZalo = async (req, res) => {
    let result = {};

    try {
        let dataStr = req.body.data;
        let reqMac = req.body.mac;

        let mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString();
        console.log('mac =', mac);
        console.log('reqMac =', reqMac);

        // kiểm tra callback hợp lệ (đến từ ZaloPay server)
        if (reqMac !== mac) {
            // callback không hợp lệ
            result.returncode = -1;
            result.returnmessage = 'mac not equal';
        } else {
            // thanh toán thành công
            // merchant cập nhật trạng thái cho đơn hàng
            let dataJson = JSON.parse(dataStr, config.key2);
            console.log("update order's status = success where apptransid =", dataJson['apptransid']);

            result.returncode = 1;
            result.returnmessage = 'success';
        }
    } catch (ex) {
        result.returncode = 0; // ZaloPay server sẽ callback lại (tối đa 3 lần)
        result.returnmessage = ex.message;
    }

    // thông báo kết quả cho ZaloPay server
    res.status(200).send({ status: 'ok', result });
};

const orderStatus = async (req, res) => {
    const app_tran_id = req.params.app_tran_id;
    let postData = {
        appid: config.appid,
        apptransid: app_tran_id, // Input your apptransid
    };

    let data = postData.appid + '|' + postData.apptransid + '|' + config.key1; // appid|apptransid|key1
    postData.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

    let postConfig = {
        method: 'post',
        url: 'https://sandbox.zalopay.com.vn/v001/tpe/getstatusbyapptransid',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(postData),
    };

    try {
        const result = await axios(postConfig);
        console.log('result: ', result.data);
        return res.status(200).send({ status: 'ok', result: result.data });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: 'error', message: error.message });
    }
    // Khi isprocessing = true
    // Khi returncode = -49 - người dùng chưa thanh toán đơn hàng (thành công / thất bại)
    // Khi returncode = -117 - người dùng nhập sai mật khẩu khi thanh toán trên ZaloPay App
};

module.exports = {
    createPaymentZalo,
    callbackPaymentZalo,
    orderStatus,
};
