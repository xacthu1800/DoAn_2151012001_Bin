import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";



const ProductType = () => {
  return (
    <>
        <div className="product_type">
            <div className="container">
                <div className="box">
                    <div className="icon_box">
                         <MdOutlinePhoneIphone className="icon"/>
                    </div>               
                </div>
                <div className="box">
                    <div className="icon_box">
                         <MdOutlineLaptopMac className="icon"/>
                    </div>               
                </div>
                <div className="box">
                    <div className="icon_box">
                         <FaHeadphonesAlt className="icon"/>
                    </div>               
                </div>
                <div className="box">
                    <div className="icon_box">
                         <BsSmartwatch  className="icon"/>
                    </div>               
                </div>
            </div>

        </div>
    </>
  )
}

export default ProductType