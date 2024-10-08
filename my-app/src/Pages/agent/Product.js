import React from 'react';
import iphoneImage from '../../resources/Phone/iphone-15-plus_1__1.webp';
import { Routes, Route, Link } from 'react-router-dom';
import Product_Add from './Product_Add';
import Product_Edit from './Product_Edit';

import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

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
    const [optionList, setOptionList] = useState([]); // Đảm bảo optionList là một mảng

    const fetchProduct = async () => {
        const { statusCode, data } = await Api.postRequest('/api/admin/getProduct', {
            agentName: localStorage.getItem('userName'),
        });
        if (statusCode === 200) {
            const parsedData = JSON.parse(data).productList;
            setProductList(parsedData);
        }
    };

    const handleCheckboxChange = (productId) => {
        setOptionList((prevList) => {
            // Kiểm tra xem productId đã có trong optionList chưa
            if (prevList.includes(productId)) {
                // Nếu đã có, xóa khỏi danh sách
                return prevList.filter((id) => id !== productId);
            } else {
                // Nếu chưa có, thêm vào danh sách
                return [...prevList, productId];
            }
        });
    };

    const handleDeleteProduct = async () => {
        const { statusCode, data } = await Api.deleteRequest('/api/admin/product', { productIdList: optionList });
        if (statusCode === 200) {
            toast.success('Delete successful');
            fetchProduct();
        }
    };

    useEffect(() => {
        fetchProduct();
        console.log(optionList); // In ra optionList mỗi khi nó thay đổi
    }, [optionList]);

    return (
        <div className="bill-cont">
            <div className="title-cont">
                <div className="title">Product List</div>
            </div>
            <div className="cap-below">
                <div className="admin_product-cont">
                    <div className="product-actions">
                        <button className="btn" onClick={handleDeleteProduct}>
                            Xóa
                        </button>
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
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={optionList.includes(product._id)} // Kiểm soát trạng thái checkbox
                                            onChange={() => handleCheckboxChange(product._id)} // Gọi hàm khi checkbox thay đổi
                                        />
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
