import React, { useState } from 'react';
import iphoneImage from '../../resources/Phone/iphone-15-plus_1__1.webp';
import { Routes, Route, Link } from 'react-router-dom';

export default function Product_Add() {
    return (
        <Routes>
            <Route path="/" element={<ProductAdd_template />} />
        </Routes>
    );
}

function ProductAdd_template() {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    return (
        <div className="bill-cont">
            <div className="title-cont">
                <div className="title">Product Add </div>
            </div>
            <div className="cap-below">
                <div className="product-add-form">
                    <form>
                        <div className="section-left">
                            <div>
                                <label>Product Name:</label>
                                <input type="text" name="productName" />
                            </div>
                            <div>
                                <label>Product Price:</label>
                                <input type="number" name="productPrice" />
                            </div>
                            <div>
                                <label>Product Type:</label>
                                <select name="productType">
                                    <option value="Phone">Phone</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Headphone">Headphone</option>
                                    <option value="Watch">Watch</option>
                                </select>
                            </div>
                            <div>
                                <label>Product Quantity:</label>
                                <input type="number" name="productQuantity" />
                            </div>
                            <button type="submit">Add Product</button>
                        </div>
                        <div className="section-right">
                            <label>Product Image:</label>
                            <input type="file" name="productImage" accept="image/*" onChange={handleImageChange} />
                            {imagePreview && <img src={imagePreview} alt="Product Preview" className="image-preview" />}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
