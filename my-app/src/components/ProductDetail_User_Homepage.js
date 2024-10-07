import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';

const ProductDetail = () => {
    const product = {
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
        name: 'Ghế Lưới Văn Phòng',
        price: 1070000,
        description: 'Ghế lưới chân quỳ, ghế văn phòng, ghế lưới làm việc.',
        category: 'Nội thất văn phòng',
        stock: 390,
        warranty: '12 tháng',
        origin: 'TP. Hồ Chí Minh',
        brand: 'ACACIA BEDDING',
    };

    const [quantity, setQuantity] = useState(1); // State để quản lý số lượng sản phẩm

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Logic để thêm sản phẩm vào giỏ hàng
        console.log(`Thêm ${quantity} sản phẩm vào giỏ hàng`);
    };

    return (
        <div className="product-detail">
            {/* Phần 1: Hiển thị hình ảnh, tên, giá và số lượng */}
            <div className="product-info">
                <div className="product-info-left">
                    <div className="product-info-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
                <div className="product-info-right">
                    <h1>{product.name}</h1>
                    <p className="product-info-price">Giá: {new Intl.NumberFormat('vi-VN').format(product.price)} đ</p>
                    <div className="quantity-control">
                        <CiCircleMinus onClick={handleDecrease} className="quantity-control-button" />
                        <span className="quantity-control-number">{quantity}</span>
                        <CiCirclePlus onClick={handleIncrease} className="quantity-control-button" />
                    </div>
                    <button onClick={handleAddToCart} className="add-to-cart-button">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>

            {/* Phần 2: Thông tin chi tiết sản phẩm */}
            <div className="product-details">
                <h2 className="product-details-label">Chi tiết sản phẩm</h2>

                <p>
                    <strong className="product-details-title">Danh mục:</strong> {product.category}
                </p>
                <p>
                    <strong className="product-details-title">Số lượng trong kho:</strong> {product.stock}
                </p>
                <p>
                    <strong className="product-details-title">Hạn bảo hành:</strong> {product.warranty}
                </p>
                <p>
                    <strong className="product-details-title">Gửi từ:</strong> {product.origin}
                </p>
                <p>
                    <strong className="product-details-title">Thương hiệu:</strong> {product.brand}
                </p>
                <p>
                    <strong className="product-details-title">Mô tả:</strong> {product.description}
                </p>
            </div>
        </div>
    );
};

export default ProductDetail;
