import { MdOutlineDeleteOutline } from 'react-icons/md';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { FaChevronRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../redux/actions/cartAction';
import { useState, useEffect } from 'react';
import { addToCart, removeFromCart } from '../redux/actions/cartAction';
import { useSelector } from 'react-redux';

export default function Cart() {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;

    console.log(cartItems);

    useEffect(() => {
        dispatch(fetchCart());
    }, []);
    return (
        <>
            {' '}
            <div className="cart-cont">
                <div className="cont">
                    <div className="price-cont">
                        <div className="price-value">Total: 20.000.000 Đ </div>
                        <Link to="/Checkout" className="icon">
                            <FaChevronRight /> Checkout
                        </Link>
                    </div>

                    <div className="list-item">
                        {cartItems.map((item) => (
                            <div className="item-block" key={item.product}>
                                <div className="block-cont">
                                    <div className="image-cont">
                                        <img src={item.imageUrl} alt={item.name} />
                                    </div>
                                    <div className="infor-cont">
                                        <div className="delete-btn-cont">
                                            <MdOutlineDeleteOutline className="delete-btn" />
                                        </div>
                                        <div className="categories">{item.productType}</div>
                                        <div className="product-name">{item.name}</div>
                                        <div className="product-price">
                                            Price: {Number(item.price).toLocaleString()} Đ
                                        </div>
                                        <div className="custom-item">
                                            <CiCirclePlus className="item" />
                                            <div className="custom-value item">{item.qty}</div>
                                            <CiCircleMinus className="item" />
                                        </div>
                                        <div className="sub-price">
                                            SUB TOTAL: {(Number(item.price) * item.qty).toLocaleString()} Đ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
