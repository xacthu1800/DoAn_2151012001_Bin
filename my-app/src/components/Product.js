import Caption from "./Caption"
import { IoEyeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";


const Product = (props) => {
  return (
    <div className="grid-newproduct">
        <Caption cap={props.cap}/>
        <div className="grid-container">
            <div className="grid-item" onClick={()=>{props.setClose(!props.close)}}>
                <div className="image-container">
                 <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                </div>
                <div className="productName">Product Name</div>
                <div className="productPrice">10.000.000đ</div>
                <div className="discount">20%</div>
                <div className="productPrice_discounted ">2.000.000 USA</div>
            </div>
            <div className="grid-item" onClick={()=>{props.setClose(!props.close)}}>
                <div className="image-container">
                 <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                </div>
                <div className="productName">Product Name</div>
                <div className="productPrice">10.000.000đ</div>
            </div>
            <div className="grid-item" onClick={()=>{props.setClose(!props.close)}}>
                <div className="image-container">
                 <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                </div>
                <div className="productName">Product Name</div>
                <div className="productPrice">10.000.000đ</div>
            </div>
            <div className="grid-item" onClick={()=>{props.setClose(!props.close)}}>
                <div className="image-container">
                 <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                </div>
                <div className="productName">Product Name</div>
                <div className="productPrice">10.000.000đ</div>
            </div>
        </div>
    </div>
  )
}

export default Product