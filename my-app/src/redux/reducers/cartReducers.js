import * as actionTypes from '../constants/cartConstant';

const CART_INITIAL_STATE = {
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.cartItems.find((x) => x.product === item.product);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case actionTypes.UPDATE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map((x) =>
                    x.productId === action.payload.productId ? { ...x, count: action.payload.count } : x,
                ),
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.productId !== action.payload), // Use productId to match the dispatched payload
            };
        case actionTypes.FETCH_MY_CART:
            return {
                ...state,
                cartItems: [...action.payload.carts],
            };
        default:
            return state;
    }
};
