import React from 'react';
import iphoneImage from '../../resources/Phone/iphone-15-plus_1__1.webp';
import { Routes, Route, Link } from 'react-router-dom';
import Product_Add from './Product_Add';
import Product_Edit from './Product_Edit';

import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { useState, useEffect } from 'react';

const products = [
    {
        id: 1,
        name: 'iPhone 13 Pro Max',
        price: '21.000.000₫',
        category: 'IPhone 13',
        variant: 'Có',
        quantity: 18,
        status: 'Hiển Thị',
        img: iphoneImage,
    },
    {
        id: 2,
        name: 'Iphone 13 Seri',
        price: '18.990.000₫',
        category: 'IPhone 13',
        variant: 'Có',
        quantity: 25,
        status: 'Hiển Thị',
        img: iphoneImage,
    },
    {
        id: 3,
        name: 'Ốp lưng MagSafe cho iPhone 15 Pro Max Nhựa trong Apple',
        price: '1.169.000₫',
        category: 'Phụ kiện',
        variant: 'Không',
        quantity: 25,
        status: 'Hiển Thị',
        img: iphoneImage,
    },
    {
        id: 4,
        name: 'AirPods Pro (2nd Gen) Lightning',
        price: '5.390.000₫',
        category: 'Phụ kiện',
        variant: 'Không',
        quantity: 25,
        status: 'Hiển Thị',
        img: iphoneImage,
    },
    {
        id: 5,
        name: 'AirPods 2 sạc Lightning',
        price: '3.490.000₫',
        category: 'Phụ kiện',
        variant: 'Không',
        quantity: 25,
        status: 'Hiển Thị',
        img: iphoneImage,
    },
];

export default function Product() {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="Product/Add_product" element={<Product_Add />} />
            <Route path="Product/Edit_product/:id" element={<Product_Edit />} />
        </Routes>
    );
}

function ProductList() {
    const [productList, setProductList] = useState([]);

    const fetchProduct = async () => {
        const { statusCode, data } = await Api.getRequest('/api/admin/product');
        if (statusCode === 200) {
            const parsedData = JSON.parse(data).productList;
            setProductList(parsedData);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className="bill-cont">
            <div className="title-cont">
                <div className="title">Product List</div>
            </div>
            <div className="cap-below">
                <div className="admin_product-cont">
                    <div className="product-actions">
                        <button className="btn">Chọn Tất Cả</button>
                        <button className="btn">Xóa</button>
                        <button className="btn">Thêm Giảm Giá</button>
                        <button className="btn">
                            <Link to="Product/Add_product" className="Add-Link">
                                Add new Product
                            </Link>
                        </button>
                    </div>
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Product Type</th>
                                <th>Quantity</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((product) => (
                                <tr key={product._id}>
                                    <td>
                                        <input type="checkbox" className="checkbox" />
                                    </td>
                                    <td className="img-td">
                                        <img src={product.productImage} alt="product" />
                                    </td>
                                    <td className="name-td">{product.productName}</td>
                                    <td className="price-td">
                                        {Number(product.productPrice).toLocaleString('vi-VN')}₫
                                    </td>
                                    <td>{product.productType}</td>
                                    <td>{product.productCountInStock}</td>

                                    <td className="edit-td">
                                        <button className="edit-btn">
                                            <Link to={`Product/Edit_product/${product._id}`} className="Add-Link">
                                                Edit
                                            </Link>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
