import * as actionTypes from '../constants/cartConstant';
import { Api } from '../../utils/Api';
import { convertToCartData } from '../../utils/utils.function';

export const addToCart = (id, qty) => async (dispatch) => {
    const { data } = await Api.getRequest(`/api/product/${id}`);
    const product = JSON.parse(data);
    //console.log('addToCart - client - Cart action');
    /* const productString = JSON.stringify(product);
    const productParse = JSON.parse(productString);
    console.log('data from addToCart - client - Cart action');
    console.log('Raw data:', data);
    console.log('product with Stringify: ' + productString);
    console.log('product with parse: ' + productParse.productName); */
    // product = {_id,productName, productType,
    //           productImage, productPrice,
    //           screenSize, displayTech, chipset, ramCapacity, internalStorage, productCountInStock}

    dispatch({
        type: actionTypes.ADD_TO_CART,

        payload: {
            _id: product._id,
            userId: product.userId, // Thêm userId
            productId: product.productId, // Thêm productId
            count: qty, // Thêm count
            productName: product.productName,
            productImage: product.productImage,
            productPrice: product.productPrice,
            productType: product.productType,
            productCountInStock: product.productCountInStock,
        },
    });

    Api.postRequest('/api/cart', { productIdData: JSON.stringify(product), count: qty });
};

export const removeFromCart = (id) => async (dispatch, getState) => {
    const {
        cart: { cartItems },
    } = getState();
    const item = cartItems.find((item) => item.product === id);

    if (item) {
        if (item.count > 1) {
            dispatch({
                type: actionTypes.UPDATE_CART_ITEM,
                payload: {
                    ...item,
                    count: item.count - 1,
                },
            });
            Api.postRequest(`/api/cart/update/${id}`, { count: item.count - 1 });
        } else {
            dispatch({
                type: actionTypes.REMOVE_FROM_CART,
                payload: id,
            });
            Api.DeleteRequest(`/api/cart/${id}`, { count: 1 });
        }
    }
};

export const deleteFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });
    console.log('id from deleteFromCart - client - Cart action: BINNNNN:  ' + id);

    Api.DeleteRequest(`/api/cart/${id}?count=-1`);
};

export const fetchCart = () => async (dispatch) => {
    try {
        // nhận dữ liệu trả từ API có 2 cách
        // 1: const { data } = await Api.getRequest('/api/cart');
        // 2: const { data: strigifyData } = await Api.getRequest(`/api/cart/`);
        const { data: strigifyData } = await Api.getRequest(`/api/cart/`);
        const { carts } = JSON.parse(strigifyData);
        console.log('carts from fetchCart - client - Cart action' + carts);
        dispatch({
            type: actionTypes.FETCH_MY_CART,

            payload: {
                carts: convertToCartData(carts),
            },
        });
    } catch (e) {
        console.log('EROROR :  ', e);
    }
};

// x = [
//   {
//     product: '615ac2b036ecb5ed71497630',
//     name: 'Cannon EOS-1D',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     price: 1300,
//     countInStock: 5,
//     qty: '3',
//   },
//   {
//     product: '615ac2b036ecb5ed71497631',
//     name: 'Amazon Alexa',
//     imageUrl:
//       'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
//     price: 50,
//     countInStock: 25,
//     qty: '3',
//   },
// ]
