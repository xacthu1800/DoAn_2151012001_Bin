import { RiCoupon2Line } from "react-icons/ri";



function Checkout(props) {
  return (
    <>
      <div className='checkout-cont'>
        <div className='cont'> 
          <div className='cont-left'>
            <div>
              <h1>Checkout</h1>
            </div>
            <div className="form-wrapping">
              <form className="form-1">
  
                <div className="form-section">
                 <label>Shipping information</label>  
                </div>

                <div className="form-section">
                  <label>Full Name</label>
                  <input />
                </div>

                <div className="form-section">
                  <label>Address</label>
                  <input />
                </div>
                  
                <div className="form-section">
                  <label>Phone Number</label>
                  <input />
                </div>
                  
                <div className="form-section">
                  <label>Note</label>
                  <input />
                </div>
              
              </form>

              {/* <form className="form-2" style={{visibility:'none'}}>
                
               </form> */}
            </div>
           
          </div>

          
          <div className='cont-right'>
            <div className='review-cont box'>
              <label>Review your cart</label>
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

            <div className='order box'>
              <button className='submit-order'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout