const NewProduct = () => {
  return (
    <div className="grid-newproduct">
        <div className="grid-label">ĐIỆN THOẠI NỔI BẬT NHẤT</div>
        <div className="grid-container">
            <div className="grid-item">
                <div className="image-container">
                 <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                </div>
                <div className="productName">Iphone 15 </div>
                <div className="productPrice discounted">10.000.000đ</div>
                <div className="discount">-15%</div>
                <div className="productPrice_discounted">8.500.000đ</div>
            </div>
            <div className="grid-item">
                <div className="image-container">
                 <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                </div>
                <div className="productName">Product Name</div>
                <div className="productPrice">10.000.000đ</div>
            </div>
            <div className="grid-item">
                <div className="image-container">
                 <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                </div>
                <div className="productName">Product Name</div>
                <div className="productPrice">10.000.000đ</div>
            </div>
            <div className="grid-item">
                <div className="image-container">
                 <img src= {require("../resources/iphone-15-plus_1__1.webp")}/>
                </div>
                <div className="productName">Product Name</div>
                <div className="productPrice">10.000.000đ</div>
            </div>
            <div className="grid-item">
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

export default NewProduct