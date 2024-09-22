const Cart = require('../models/cart');

const sendResponseError = (statusCode, message, res) => {
    res.status(statusCode).send({ status: 'error', message });
};

const getCartProducts = async (req, res) => {
    try {
        let carts = [];
        if (!req.user) {
            return sendResponseError(400, 'User not authenticated', res);
        }
        carts = await Cart.find({ userId: req.user._id });

        if (!carts.length) {
            return res.status(200).send({ status: 'ok', carts: [] });
        }
        console.log('carts FETCHED - SUCCESS');
        res.status(200).send({ status: 'ok', carts });
    } catch (err) {
        console.log(err);
        sendResponseError(500, `Error ${err}`, res);
    }
};

const addProductInCart = async (req, res) => {
    const { productIdData, count } = req.body;
    const product = JSON.parse(productIdData);
    console.log('product in addProductInCart name: ' + product.productName);
    console.log('product in addProductInCart count: ' + count);
    try {
        const cart = await Cart.findOneAndUpdate(
            { userId: req.user._id, productId: product._id },
            {
                $inc: { count: count }, // Increment count if found
                $set: {
                    // Ensure productName and productPrice are set
                    productName: product.productName,
                    productPrice: product.productPrice,
                    productImage: product.productImage,
                    productType: product.productType,
                    productCountInStock: product.productCountInStock,
                },
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }, // Create new if not found
        );

        if (!cart) {
            // If not found, create a new entry
            const newCart = await Cart.create({
                productId: product._id,
                productName: product.productName,
                productPrice: product.productPrice,
                productImage: product.productImage,
                productCountInStock: product.productCountInStock,
                count: 1,
                userId: req.user._id,
            });
            return res.status(201).send({ status: 'ok', cart: newCart });
        }

        res.status(200).send({ status: 'ok', cart });
    } catch (err) {
        console.log(err);
        sendResponseError(500, `Error ${err}`, res);
    }
};

const deleteProductInCart = async (req, res) => {
    console.log('req.query.count: ' + req.query.count); // Sử dụng req.query để lấy count từ query string

    try {
        const cart = await Cart.findOne({ userId: req.user._id, productId: req.params.id });
        if (req.query.count == -1) {
            // Sử dụng req.query.count
            await Cart.findOneAndDelete({ userId: req.user._id, productId: req.params.id });
            return res.status(200).send({ status: 'ok' });
        }
        if (cart.count > 1) {
            cart.count -= 1;
            await cart.save();
            res.status(200).send({ status: 'ok', cart });
        } else {
            await Cart.findOneAndDelete({ userId: req.user._id, productId: req.params.id });
            res.status(200).send({ status: 'ok' });
        }
    } catch (err) {
        console.log(err);
        sendResponseError(500, `Error ${err}`, res);
    }
};
module.exports = { addProductInCart, deleteProductInCart, getCartProducts };

/* {
    _id: '66eeb290783a487489a08c35',
    productName: 'iphone 12 128GB',
    productType: 'PHONE',
    productCountInStock: 10,
    productImage: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-12-128gb_2.png',
    productPrice: '13000000',
    screenSize: '6.1 inches',
    displayTech: 'Super Retina XDR OLED, HDR10, Dolby Vision, Wide color gamut, True-tone',
    chipset: 'Apple A14 Bionic (5 nm)',
    ramCapacity: '4 GB',
    internalStorage: '128GB'
  } */
