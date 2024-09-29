import iphoneImage from '../../resources/Phone/iphone-15-plus_1__1.webp';
import { Routes, Route, Link } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { useState, useEffect } from 'react';

export default function Product_Add() {
    return (
        <Routes>
            <Route path="/" element={<ProductAdd_template />} />
        </Routes>
    );
}

function ProductAdd_template() {
    const [imagePreview, setImagePreview] = useState(null);

    const [product, setProduct] = useState({
        productName: '',
        productPrice: '',
        productType: 'PHONE',
        productCountInStock: '',
        productImage: '',
        screenSize: '',
        displayTech: '',
        chipset: '',
        ramCapacity: '',
        internalStorage: '',
    });

    const handleImageChange = (e) => {
        const URL = e.target.value;
        setProduct({ ...product, productImage: URL });
        setImagePreview(URL);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            productName: product.productName.toString(),
            productPrice: product.productPrice.toString(),
            productType: product.productType.toString(),
            productCountInStock: Number(product.productCountInStock),
            screenSize: product.screenSize.toString(),
            displayTech: product.displayTech.toString(),
            chipset: product.chipset.toString(),
            ramCapacity: product.ramCapacity.toString(),
            internalStorage: product.internalStorage.toString(),
            productImage: imagePreview.toString(),
        };
        console.log(productData);

        const { statusCode, data } = await Api.postRequest('/api/admin/product', productData);
        if (statusCode === 200) {
            alert('Add product successful');
            window.location.reload();
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
                                <input
                                    type="text"
                                    name="productName"
                                    value={product.productName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Product Price:</label>
                                <input
                                    type="number"
                                    name="productPrice"
                                    value={product.productPrice}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Product Type:</label>
                                <select name="productType" value={product.productType} onChange={handleChange}>
                                    <option value="PHONE" selected>
                                        Phone
                                    </option>
                                    <option value="LAPTOP">Laptop</option>
                                </select>
                            </div>
                            <div>
                                <label>Product Quantity:</label>
                                <input
                                    type="number"
                                    name="productCountInStock"
                                    value={product.productCountInStock}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Screen Size:</label>
                                <input
                                    type="text"
                                    name="screenSize"
                                    value={product.screenSize}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Display Tech:</label>
                                <input
                                    type="text"
                                    name="displayTech"
                                    value={product.displayTech}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Chip Set:</label>
                                <input type="text" name="chipset" value={product.chipset} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Ram Capacity:</label>
                                <input
                                    type="text"
                                    name="ramCapacity"
                                    value={product.ramCapacity}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Internal Storage:</label>
                                <input
                                    type="text"
                                    name="internalStorage"
                                    value={product.internalStorage}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" onClick={handleSubmit}>
                                Add
                            </button>
                        </div>
                        <div className="section-right">
                            <label>Product Image URL:</label>
                            <input type="text" name="productImage" onChange={handleImageChange} />
                            {imagePreview && <img src={imagePreview} alt="Product Preview" className="image-preview" />}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
