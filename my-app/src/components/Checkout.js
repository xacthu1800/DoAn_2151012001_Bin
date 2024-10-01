import { RiCoupon2Line } from 'react-icons/ri';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { useState, useEffect } from 'react';
import { fetchCart } from '../redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Api } from '../utils/Api';

import useLogin from '../utils/hooks/useLogin';

function Checkout(props) {
    const [isForm2Visible, setForm2Visible] = useState(false);
    const [sumPrice, setSumPrice] = useState(0);
    const [voucher, setVoucher] = useState('');
    const [discount, setDiscount] = useState('0');
    const [shipping, setShipping] = useState('20000');
    const [voucherData, setVoucherData] = useState(null);

    const [userFullname, setUserFullname] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const [userNote, setUserNote] = useState('_');
    const [userPayment, setUserPayment] = useState('COD');

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const userId = user.userInfo.details._id;
    const cart = useSelector((state) => state.cart);

    const { loginInfo } = useLogin();
    const { cartItems } = cart;

    /*  Dữ liệu truyền đi trong form:
        - userFullname
        - userAddress
        - userPhoneNumber
        - userNote
        - userPayment
        - cartItems
        - discount
        - shipping
    */

    //-----------------------  USE EFFECT  -----------------------//
    useEffect(() => {
        console.log('everything still Ok');
        console.log(user.userInfo.details._id);
        sumCaculate();
    }, [cartItems, voucherData]);

    //-----------------------  FUNCTION  ---------------------//

    // hàm tính total price
    function sumCaculate() {
        let total = 0;
        if (voucherData != null && voucherData.length > 0) {
            cartItems.forEach((item) => {
                if (item.price && item.qty) {
                    // Kiểm tra giá và số lượng
                    total += Number(item.price) * Number(item.qty);
                }
            });
            total = total + Number(shipping);
            if (Number(voucherData[0].maxDiscount) < (total * Number(voucherData[0].discountPercentage)) / 100) {
                total = total - Number(voucherData[0].maxDiscount);
            } else {
                total = total - (total * Number(voucherData[0].discountPercentage)) / 100;
            }
        } else {
            cartItems.forEach((item) => {
                if (item.price && item.qty) {
                    // Kiểm tra giá và số lượng
                    total += Number(item.price) * Number(item.qty);
                }
            });
            total = total + Number(shipping);
        }

        console.log('total: ', total);

        setSumPrice(total);
    }

    const vi = () => {
        console.log(userFullname, userAddress, userPhoneNumber, userNote, userPayment);
    };

    // Hàm để kiểm tra nếu tất cả các input đã được điền
    const isForm1Complete = () => {
        return userFullname && userAddress && userPhoneNumber && userNote;
    };

    // Hàm để xử lý khi nhấn nút
    const handleButtonClick = () => {
        if (isForm1Complete()) {
            setForm2Visible(true);
        } else {
            alert('Please fill in all required fields');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Ngăn không cho xuống hàng khi nhấn Enter
        }
    };

    const handleSubmit = async () => {
        // Đảm bảo userPayment có giá trị mặc định nếu chưa được chọn
        const paymentMethod = userPayment || 'COD'; // Giá trị mặc định là "COD"

        const { statusCode } = await Api.postRequest(`/api/user/checkout/${userId}`, {
            userFullname: userFullname.toString(),
            userAddress: userAddress.toString(),
            userPhoneNumber: userPhoneNumber.toString(),
            userNote: userNote.toString(),
            userPayment: paymentMethod.toString(), // Sử dụng paymentMethod
            discount: discount.toString(),
            shipping: shipping.toString(),
            cartItems,
            sumPrice: sumPrice.toString(),
            state: 'pending',
        });
        console.log(statusCode);
        if (statusCode == 200) {
            alert('Đặt hàng thành công');
        } else {
            alert('Đặt hàng thất bại');
        }
        navigate('/', { replace: true });
    };

    const handleVoucher = async (e) => {
        e.preventDefault();
        const { statusCode, data } = await Api.postRequest(`/api/user/voucher`, {
            voucherCode: voucher.toString(),
        });
        console.log('statusCode: ', statusCode);
        if (statusCode == 200) {
            const { voucherData } = JSON.parse(data);
            setVoucherData(voucherData);
            alert('Mã giảm giá hợp lệ');
        } else if (statusCode == 404) {
            alert('Mã giảm giá không hợp lệ');
            setVoucherData(null); // Đặt voucherData về null nếu mã không hợp lệ
        } else {
            console.log(`Unexpected status code: ${statusCode}`); // Ghi lại mã trạng thái không mong đợi
        }
    };

    return (
        <>
            <div className="checkout-cont">
                <div className="cont">
                    <div className="cont-left">
                        <div>
                            <h1>Checkout</h1>
                        </div>
                        <div className="form-wrapping">
                            {!isForm2Visible ? (
                                <form className="form-1">
                                    <div className="form-section head">
                                        <div>
                                            <label>Customer Information</label>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <label>Full Name</label>
                                        <input
                                            name="fullName"
                                            value={userFullname}
                                            onChange={(e) => setUserFullname(String(e.target.value))}
                                            maxLength={20}
                                            placeholder="Nguyen Van A"
                                        />
                                    </div>

                                    <div className="form-section">
                                        <label>Address</label>
                                        <input
                                            name="address"
                                            value={userAddress}
                                            onChange={(e) => setUserAddress(String(e.target.value))}
                                            maxLength={100}
                                            placeholder="65B, distric 5"
                                        />
                                    </div>

                                    <div className="form-section">
                                        <label>Phone Number</label>
                                        <input
                                            name="phoneNumber"
                                            value={userPhoneNumber}
                                            onChange={(e) => setUserPhoneNumber(String(e.target.value))}
                                            maxLength={20}
                                            placeholder="09********"
                                        />
                                    </div>

                                    <div className="form-section">
                                        <textarea
                                            name="note"
                                            value={userNote}
                                            onChange={(e) => setUserNote(String(e.target.value))}
                                            maxLength={150}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Note"
                                        >
                                            Note
                                        </textarea>
                                    </div>

                                    {/* Nút để chuyển sang form-2 */}
                                    <div className="form-section button-form">
                                        <button type="button" onClick={handleButtonClick}>
                                            Next
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <form className="form-2">
                                    {/* Nội dung của form-2 (payment form) */}
                                    <div className="form-section head">
                                        <div>
                                            <label>Payment Information</label>
                                        </div>
                                        <div>
                                            <MdKeyboardArrowLeft
                                                className="icon"
                                                onClick={() => setForm2Visible(false)}
                                            />
                                        </div>
                                    </div>

                                    <div className="cus-infor-box">
                                        <div className="box">
                                            <div className="item">
                                                <label className="item-cate">Name</label>
                                                <label className="item-value">{userFullname}</label>
                                            </div>
                                            <div className="item">
                                                <label className="item-cate">Phone</label>
                                                <label className="item-value">{userPhoneNumber}</label>
                                            </div>
                                            <div className="item note">
                                                <label className="item-cate">Address</label>
                                                <label className="item-value">{userAddress}</label>
                                            </div>
                                            <div className="item note">
                                                <label className="item-cate">Note</label>
                                                <label className="item-value">{userNote}</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="type-payment">
                                        <select
                                            className="list-option"
                                            name="payment-option"
                                            onChange={(e) => setUserPayment(e.target.value)}
                                        >
                                            <option value="COD" selected>
                                                COD (Thanh toán khi nhận hàng)
                                            </option>
                                            <option value="VNPay">VNPay</option>
                                            <option value="MoMo">MoMo</option>
                                        </select>
                                    </div>

                                    <div className="submit-button">
                                        <button type="button" onClick={handleSubmit}>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="cont-right">
                        <div className="review-cont box">
                            <h1>Review your cart</h1>
                            <div className="list-item">
                                <div className="item-cont">
                                    {cartItems.map((item, index) => (
                                        <div className="item" key={index}>
                                            <img src={item.imageUrl} alt={item.name} />
                                            <div className="infor-wrapper">
                                                <h3 className="name">{item.name}</h3>
                                                <div className="price-amount-wrapper">
                                                    <h3 className="price">{Number(item.price).toLocaleString()} Đ</h3>
                                                    <h3 className="amount">amount: {item.qty}</h3>
                                                </div>
                                                <h6>subtotal : {(Number(item.price) * item.qty).toLocaleString()} Đ</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="discount-code box">
                            <RiCoupon2Line className="coupon-icon" />

                            <input
                                type="text"
                                value={voucher}
                                placeholder="Enter The Voucher"
                                onChange={(e) => setVoucher(e.target.value.toUpperCase())}
                            ></input>
                            <button onClick={(e) => handleVoucher(e)}>Apply</button>
                        </div>

                        <div className="table-pricing box">
                            <div className="subTotal table-section">
                                <label className="font-1">subtotal</label>
                                <div className="subTotal-value font-1">{sumPrice.toLocaleString()} Đ</div>
                            </div>
                            <div className="shipping table-section">
                                <label className="font-1">shipping</label>
                                <div className="shipping-value font-1">20.000 Đ</div>
                            </div>
                            <div className="coupon table-section">
                                <label className="font-1">voucher</label>
                                <div className="coupon-value font-1">
                                    {voucherData != null && voucherData.length > 0
                                        ? `-${voucherData[0].discountPercentage}%`
                                        : '-0%'}
                                </div>
                            </div>
                            <div className="finalPrice table-section">
                                <label className="font-2"> Total</label>
                                <div className="finalPrice-value font-2">{sumPrice.toLocaleString()} Đ</div>
                            </div>
                        </div>

                        {/* <div className='order box'>
              <button className='submit-order'>Submit</button>
            </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
