import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";

import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <>  <div className="cart-cont">
            <div className="cont">
                <div className="price-cont">
                    <div className="price-value">Total: 20.000.000 Đ </div>
                    <Link to='/Checkout' className="icon" ><FaChevronRight  /> Checkout</Link>
                </div>

                <div className="list-item">
                    <div className="item-block">
                        <div className="block-cont">
                            <div className="image-cont">
                                <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                            </div>
                            <div className="infor-cont">
                            <MdOutlineDeleteOutline className="delete-btn"/>
                            <div className="categories">PHONE</div>
                            <div className="product-name">Iphone 15</div>
                            <div className="product-price">Price: 20.000.000 Đ</div>
                            <div className="custom-item">
                                <CiCirclePlus className="item"/>
                                <div className="custom-value item">1</div>
                                <CiCircleMinus className="item"/>
                            </div>
                            <div className="sub-price">SUB TOTAL: 20.000.000</div>
                            </div>
                        </div>
                    </div>

                    <div className="item-block">
                        <div className="block-cont">
                            <div className="image-cont">
                                <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                            </div>
                            <div className="infor-cont">
                            <MdOutlineDeleteOutline className="delete-btn"/>
                            <div className="categories">PHONE</div>
                            <div className="product-name">Iphone 15</div>
                            <div className="product-price">Price: 20.000.000 Đ</div>
                            <div className="custom-item">
                                <CiCirclePlus className="item"/>
                                <div className="custom-value item">1</div>
                                <CiCircleMinus className="item"/>
                            </div>
                            <div className="sub-price">SUB TOTAL: 20.000.000</div>
                            </div>
                        </div>
                    </div>

                    <div className="item-block">
                        <div className="block-cont">
                            <div className="image-cont">
                                <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                            </div>
                            <div className="infor-cont">
                            <MdOutlineDeleteOutline className="delete-btn"/>
                            <div className="categories">PHONE</div>
                            <div className="product-name">Iphone 15</div>
                            <div className="product-price">Price: 20.000.000 Đ</div>
                            <div className="custom-item">
                                <CiCirclePlus className="item"/>
                                <div className="custom-value item">1</div>
                                <CiCircleMinus className="item"/>
                            </div>
                            <div className="sub-price">SUB TOTAL: 20.000.000</div>
                            </div>
                        </div>
                    </div>

                    <div className="item-block">
                        <div className="block-cont">
                            <div className="image-cont">
                                <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                            </div>
                            <div className="infor-cont">
                            <MdOutlineDeleteOutline className="delete-btn"/>
                            <div className="categories">PHONE</div>
                            <div className="product-name">Iphone 15</div>
                            <div className="product-price">Price: 20.000.000 Đ</div>
                            <div className="custom-item">
                                <CiCirclePlus className="item"/>
                                <div className="custom-value item">1</div>
                                <CiCircleMinus className="item"/>
                            </div>
                            <div className="sub-price">SUB TOTAL: 20.000.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
