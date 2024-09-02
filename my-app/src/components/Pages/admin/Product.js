import React from 'react';
import iphoneImage from '../../../resources/Phone/iphone-15-plus_1__1.webp';
import { Routes, Route, Link } from 'react-router-dom';
import Product_Add from './Product_Add';

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
        </Routes>
    );
}

function ProductList() {
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <input type="checkbox" className="checkbox" />
                                    </td>
                                    <td className="img-td">
                                        <img src={product.img} alt="product" />
                                    </td>
                                    <td className="name-td">{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button className="status-btn">{product.status}</button>
                                    </td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
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
