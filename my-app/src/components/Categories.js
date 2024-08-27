import Caption from './Caption';
import { IoEyeOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { FaArrowUp } from 'react-icons/fa6';
import { FaArrowDown } from 'react-icons/fa6';

export default function Categories(props) {
    return (
        <>
            <div className="Categories-box">
                <div className="box">
                    <div className="box-left">
                        <div className=" cap-main">Categories</div>
                        <div className="cap cap-product">Phone</div>
                        <div className="cap cap-product">Laptop</div>
                        <div className="cap cap-product">Headphone</div>
                        <div className="cap cap-product">Watch</div>
                        <div className="cap-normal">Price </div>
                        <div className="price-up-down">
                            <FaArrowUp className="price-lowToUp" />
                            <FaArrowDown className="price-upToLow" />
                        </div>
                        <div className="option-container">
                            <div className="price-option">
                                <input type="radio" value="1" name="Price1" />
                                <div className="cap-norma2">0 - 5.000.000Đ</div>
                            </div>
                            <div className="price-option">
                                <input type="radio" value="1" name="Price1" />
                                <div className="cap-norma2">5.000.000 - 10.000.000Đ</div>
                            </div>
                            <div className="price-option">
                                <input type="radio" value="1" name="Price1" />
                                <div className="cap-norma2"> over 10.000.000Đ</div>
                            </div>
                        </div>
                    </div>
                    <div className="box-right">
                        <div className="grid-container ">
                            <div
                                className="grid-item"
                                onClick={() => {
                                    props.setClose(!props.close);
                                }}
                            >
                                <div className="image-container">
                                    <img src={require('../resources/iphone-15-plus_1__1.webp')} />
                                </div>
                                <div className="productName">Product Name</div>
                                <div className="productPrice">10.000.000đ</div>
                                <div className="discount">20%</div>
                                <div className="productPrice_discounted ">2.000.000 USA</div>
                            </div>
                            <div
                                className="grid-item"
                                onClick={() => {
                                    props.setClose(!props.close);
                                }}
                            >
                                <div className="image-container">
                                    <img src={require('../resources/iphone-15-plus_1__1.webp')} />
                                </div>
                                <div className="productName">Product Name</div>
                                <div className="productPrice">10.000.000đ</div>
                                <div className="discount">20%</div>
                                <div className="productPrice_discounted ">2.000.000 USA</div>
                            </div>
                            <div
                                className="grid-item"
                                onClick={() => {
                                    props.setClose(!props.close);
                                }}
                            >
                                <div className="image-container">
                                    <img src={require('../resources/iphone-15-plus_1__1.webp')} />
                                </div>
                                <div className="productName">Product Name</div>
                                <div className="productPrice">10.000.000đ</div>
                                <div className="discount">20%</div>
                                <div className="productPrice_discounted ">2.000.000 USA</div>
                            </div>
                            <div
                                className="grid-item"
                                onClick={() => {
                                    props.setClose(!props.close);
                                }}
                            >
                                <div className="image-container">
                                    <img src={require('../resources/iphone-15-plus_1__1.webp')} />
                                </div>
                                <div className="productName">Product Name</div>
                                <div className="productPrice">10.000.000đ</div>
                                <div className="discount">20%</div>
                                <div className="productPrice_discounted ">2.000.000 USA</div>
                            </div>
                            <div
                                className="grid-item"
                                onClick={() => {
                                    props.setClose(!props.close);
                                }}
                            >
                                <div className="image-container">
                                    <img src={require('../resources/iphone-15-plus_1__1.webp')} />
                                </div>
                                <div className="productName">Product Name</div>
                                <div className="productPrice"></div>
                                <div className="discount"></div>
                                <div className="productPrice_discounted ">2.000.000 USA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
