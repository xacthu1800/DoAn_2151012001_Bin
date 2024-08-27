import { RiCoupon2Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { useState } from "react";


function Checkout(props) {
  const [isForm2Visible, setForm2Visible] = useState(false);

  // State để lưu trữ các giá trị của form-1
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    note: '',
  });

  // Hàm để xử lý sự thay đổi của input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hàm để kiểm tra nếu tất cả các input đã được điền
  const isForm1Complete = () => {
    const { fullName, address, phoneNumber } = formData;
    return fullName && address && phoneNumber;
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
  return (
    <>
      <div className='checkout-cont'>
        <div className='cont'> 
          <div className='cont-left'>
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
                    <input name="fullName"
                           value={formData.fullName}
                           onChange={handleChange}
                           maxLength={20}
                           placeholder="Nguyen Van A" />
                  </div>

                  <div className="form-section">
                    <label>Address</label>
                    <input name="address"
                           value={formData.address}
                            onChange={handleChange}
                            maxLength={100}
                            placeholder="65B, distric 5" />
                  </div>

                  <div className="form-section">
                    <label>Phone Number</label>
                    <input name="phoneNumber" 
                           value={formData.phoneNumber}
                           onChange={handleChange}
                           maxLength={20}
                           placeholder="09********" />
                  </div>

                  <div className="form-section">
                    <textarea name="note"
                              value={formData.note}
                               onChange={handleChange}
                               maxLength={150}
                               onKeyDown={handleKeyDown}
                               placeholder="Note">Note</textarea>
                  </div>

                  {/* Nút để chuyển sang form-2 */}
                  <div className="form-section button-form">
                    <button type="button" onClick={handleButtonClick}>Next</button>
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
                        <MdKeyboardArrowLeft className="icon" onClick={()=> setForm2Visible(false)}/>
                      </div>
                  </div>

                  <div className="cus-infor-box">
                    <div className="box">
                      <div className="item">
                        <label className="item-cate">Name</label>
                        <label className="item-value">{formData.fullName}</label>
                      </div>
                      <div className="item">
                        <label className="item-cate">Phone</label>
                        <label className="item-value">{formData.phoneNumber}</label>
                      </div>
                      <div className="item note">
                        <label className="item-cate">Address</label>
                        <label className="item-value">{formData.address}</label>
                      </div>
                      <div className="item note">
                        <label className="item-cate">Note</label>
                        <label className="item-value">{formData.note}</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="type-payment">
                     <select className="list-option" name="payment-toption">
                      <option value="au">COD (Thanh toán khi nhận hàng)</option>
                      <option value="ca">VNPay</option>
                      <option value="usa">MoMo</option>
                      </select>
                  </div>

                  <div className="submit-button">
                    <button>Submit</button>
                  </div>

                </form>
                
              )}
            </div>
                  
          </div>

          
          <div className='cont-right'>
            <div className='review-cont box'>
              <h1>Review your cart</h1>
              <div className='list-item'>
                <div className='item-cont'>
                  <div className='item'>
                    <img src={(require('../resources/Phone/iphone-15-plus_1__1.webp'))}></img>
                    <div className='infor-wrapper'>
                      <h3 className='name'>Iphone 15</h3>
                      <div className='price-amount-wrapper'>
                        <h3 className='price'>20.000.000 Đ</h3>
                        <h3 className='amount'>amount: 2</h3>
                      </div>
                    </div>
             
                  </div>
                  <div className='item'>
                    <img src={(require('../resources/Phone/iphone-15-plus_1__1.webp'))}></img>
                    <div className='infor-wrapper'>
                      <h3 className='name'>Iphone 15</h3>
                      <div className='price-amount-wrapper'>
                        <h3 className='price'>20.000.000 Đ</h3>
                        <h3 className='amount'>amount: 2</h3>
                      </div>
                    </div>
             
                  </div>
                  <div className='item'>
                    <img src={(require('../resources/Phone/iphone-15-plus_1__1.webp'))}></img>
                    <div className='infor-wrapper'>
                      <h3 className='name'>Iphone 15</h3>
                      <div className='price-amount-wrapper'>
                        <h3 className='price'>20.000.000 Đ</h3>
                        <h3 className='amount'>amount: 2</h3>
                      </div>
                    </div>
             
                  </div>
                  <div className='item'>
                    <img src={(require('../resources/Phone/iphone-15-plus_1__1.webp'))}></img>
                    <div className='infor-wrapper'>
                      <h3 className='name'>Iphone 15</h3>
                      <div className='price-amount-wrapper'>
                        <h3 className='price'>20.000.000 Đ</h3>
                        <h3 className='amount'>amount: 2</h3>
                      </div>
                    </div>
             
                  </div>
                  <div className='item'>
                    <img src={(require('../resources/Phone/iphone-15-plus_1__1.webp'))}></img>
                    <div className='infor-wrapper'>
                      <h3 className='name'>Iphone 15</h3>
                      <div className='price-amount-wrapper'>
                        <h3 className='price'>20.000.000 Đ</h3>
                        <h3 className='amount'>amount: 2</h3>
                      </div>
                    </div>
             
                  </div>
                 
                </div>
              </div>
            </div>

            <div className='discount-code box'>
              <RiCoupon2Line className="coupon-icon"/>

              <input type='text' value={props.coupon} placeholder='Enter The Product Name' onChange={e => props.setCoupon((e.target.value).toUpperCase())}></input>
              <button>Apply</button>
            </div>

            <div className='table-pricing box'>
                <div className="subTotal table-section">
                  <label className="font-1">subtotal</label>
                  <div className="subTotal-value font-1">20.0000.000 Đ</div>
                </div>
                <div className="shipping table-section">
                  <label className="font-1">shipping</label>
                  <div className="shipping-value font-1">20.000 Đ</div>
                </div>
                <div className="coupon table-section">
                  <label className="font-1">shipping</label>
                  <div className="coupon-value font-1">10.000.000 Đ</div>
                </div>
                <div className="finalPrice table-section">
                  <label className="font-2"> Total</label>
                  <div className="finalPrice-value font-2">10.000.000 Đ</div>
                </div>
            </div>

            {/* <div className='order box'>
              <button className='submit-order'>Submit</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout