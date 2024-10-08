import { IoEyeOutline } from 'react-icons/io5';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function ProductDetail({ productDetailData, close, setClose }) {
    // console.log(productDetailData);
    const [qty, setQty] = useState(1);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {}, [productDetailData]);

    function addToCartHandler() {
        if (user.userInfo.isLogin) {
            dispatch(addToCart(productDetailData._id, qty));
            toast.success('Add to cart successfully');
            return;
        } else {
            toast.error('You need to first login.');
        }
    }

    return (
        <>
            {close && productDetailData ? (
                <div className="productDetail">
                    <div className="container">
                        <div className="container-wrap">
                            <div className="con-left">
                                <div className="img-wrap">
                                    <img src={productDetailData.productImage} alt="NULL" />
                                </div>
                                <div className="name-price">
                                    <div className="name">{productDetailData.productName}</div>
                                    <div className="price">
                                        {new Intl.NumberFormat('vi-VN').format(productDetailData.productPrice)} đ
                                    </div>
                                </div>
                            </div>

                            <div className="con-right">
                                <div className="icon">
                                    <button>
                                        <LiaCartPlusSolid onClick={addToCartHandler} />
                                    </button>
                                    <button onClick={() => setClose(false)} className="closebtn">
                                        <IoEyeOutline />
                                    </button>
                                </div>
                                <div className="Product-detail">
                                    <h2 style={{ borderBottom: '6px solid black' }}>Product Detail</h2>
                                    <table className="specs-table">
                                        <tr>
                                            <th>Thông Số</th>
                                            <th>Chi Tiết</th>
                                        </tr>
                                        <tr>
                                            <td>Model</td>
                                            <td>{productDetailData.productName}</td>
                                        </tr>
                                        <tr>
                                            <td>Screen Size</td>
                                            <td>{productDetailData.screenSize}</td>
                                        </tr>
                                        <tr>
                                            <td>Display Tech</td>
                                            <td>{productDetailData.displayTech}</td>
                                        </tr>
                                        <tr>
                                            <td>Chip set</td>
                                            <td>{productDetailData.chipset}</td>
                                        </tr>
                                        <tr>
                                            <td>Ram Capacity</td>
                                            <td>{productDetailData.ramCapacity}</td>
                                        </tr>
                                        <tr>
                                            <td>Internal Storage</td>
                                            <td>{productDetailData.internalStorage}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
