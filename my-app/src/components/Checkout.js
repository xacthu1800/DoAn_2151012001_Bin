import { RiCoupon2Line } from "react-icons/ri";



function Checkout(props) {
  return (
    <>
      <div className='checkout-cont'>
        <div className='cont'> 
          <div className='cont-left'>
            <h1>Checkout</h1>
            <h2>Shipping information</h2>

            <h3>Full Name</h3>
            <h3>Address</h3>
            <h3>Phone Number</h3>
            <h3>Note</h3>
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