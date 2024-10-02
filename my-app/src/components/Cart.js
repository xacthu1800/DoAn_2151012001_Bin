import { MdOutlineDeleteOutline } from 'react-icons/md';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { FaChevronRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../redux/actions/cartAction';
import { useState, useEffect } from 'react';
import { addToCart, removeFromCart, deleteFromCart } from '../redux/actions/cartAction';
import { toast } from 'react-toastify';

import useLogin from '../utils/hooks/useLogin';

export default function Cart() {
    const [sumPrice, setSumPrice] = useState(true);
    const [state, setState] = useState(0);
    const [isCartFetched, setIsCartFetched] = useState(false); // Thêm trạng thái mới
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);

    const { loginInfo } = useLogin();
    const { cartItems } = cart;

    //---------------------  USE EFFECT  ---------------------//
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchCart());
            setIsCartFetched(true); // Đánh dấu rằng cart đã được tải
        };
        fetchData();
    }, [state]);

    useEffect(() => {
        if (isCartFetched) {
            // Chỉ tính toán tổng khi cart đã được tải
            sumCaculate();
        }
    }, [isCartFetched, cartItems]); // Thêm cartItems vào dependency

    //---------------------  FUNCTION  ---------------------//
    function sumCaculate() {
        let total = 0;
        cartItems.forEach((item) => {
            if (item.price && item.qty) {
                // Kiểm tra giá và số lượng
                total += Number(item.price) * Number(item.qty);
            }
        });
        setSumPrice(total);
    }

    function handleAdd(productId) {
        if (user.userInfo.isLogin) {
            dispatch(addToCart(productId, 1));
            setState((prev) => prev + 1); // Đảm bảo rằng trạng thái được cập nhật để kích hoạt useEffect
            dispatch(fetchCart()); // Fetch cart after adding an item
        } else {
            toast.error('You need to first login.');
        }
    }

    function handleDelete(productId) {
        if (user.userInfo.isLogin) {
            dispatch(removeFromCart(productId));
            setState((prev) => prev + 1); // Đảm bảo rằng trạng thái được cập nhật để kích hoạt useEffect
            dispatch(fetchCart()); // Fetch cart after removing an item
        } else {
            toast.error('You need to first login.');
        }
    }

    function handleRemove(productId) {
        if (user.userInfo.isLogin) {
            dispatch(deleteFromCart(productId));
            setState((prev) => prev + 1); // Đảm bảo rằng trạng thái được cập nhật để kích hoạt useEffect
            dispatch(fetchCart()); // Fetch cart after removing an item
        } else {
            toast.error('You need to first login.');
        }
    }

    return (
        <>
            <div className="cart-cont">
                <div className="cont">
                    <div className="price-cont">
                        <div className="price-value">Total: {sumPrice.toLocaleString()} Đ </div>
                        <Link to="/Checkout" className="icon">
                            <FaChevronRight /> Checkout
                        </Link>
                    </div>

                    <div className="list-item">
                        {loginInfo.isLogin ? (
                            cartItems.map(
                                (item) =>
                                    item.price && item.qty ? ( // Kiểm tra giá và số lượng
                                        <div className="item-block" key={item.product}>
                                            <div className="block-cont">
                                                <div className="image-cont">
                                                    <img src={item.imageUrl} alt={item.name} />
                                                </div>
                                                <div className="infor-cont">
                                                    <div className="delete-btn-cont">
                                                        <MdOutlineDeleteOutline
                                                            className="delete-btn"
                                                            onClick={() => handleRemove(item.product)}
                                                        />
                                                    </div>
                                                    <div className="categories">{item.productType}</div>
                                                    <div className="product-name">{item.name}</div>
                                                    <div className="product-price">
                                                        Price: {Number(item.price).toLocaleString()} Đ
                                                    </div>
                                                    <div className="custom-item">
                                                        <CiCirclePlus
                                                            className="item"
                                                            onClick={() => handleAdd(item.product)}
                                                        />
                                                        <div className="custom-value item">{item.qty}</div>
                                                        <CiCircleMinus
                                                            className="item"
                                                            onClick={() => handleDelete(item.product)}
                                                        />
                                                    </div>
                                                    <div className="sub-price">
                                                        {/* //<div>SUB TOTAL:</div> */}
                                                        {(Number(item.price) * item.qty).toLocaleString()} Đ
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null, // Không hiển thị nếu không có giá hoặc số lượng
                            )
                        ) : (
                            <div>No items in cart</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
