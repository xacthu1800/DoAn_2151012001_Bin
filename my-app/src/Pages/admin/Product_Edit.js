import iphoneImage from '../../resources/Phone/iphone-15-plus_1__1.webp';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { useState, useEffect } from 'react';

export default function Product_Edit() {
    return (
        <Routes>
            <Route path="/" element={<ProductEdit_template />} />
        </Routes>
    );
}

function ProductEdit_template() {
    const { id } = useParams(); // Lấy tham số id từ URL
    const [imagePreview, setImagePreview] = useState(null);
    const [defaultData, setDefaultData] = useState('');

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
            productName: product.productName ? product.productName.toString() : '', // Kiểm tra null
            productPrice: product.productPrice ? product.productPrice.toString() : '', // Kiểm tra null
            productType: product.productType ? product.productType.toString() : 'PHONE', // Kiểm tra null
            productCountInStock: product.productCountInStock !== null ? Number(product.productCountInStock) : 0, // Kiểm tra null
            screenSize: product.screenSize ? product.screenSize.toString() : '', // Kiểm tra null
            displayTech: product.displayTech ? product.displayTech.toString() : '', // Kiểm tra null
            chipset: product.chipset ? product.chipset.toString() : '', // Kiểm tra null
            ramCapacity: product.ramCapacity ? product.ramCapacity.toString() : '', // Kiểm tra null
            internalStorage: product.internalStorage ? product.internalStorage.toString() : '', // Kiểm tra null
            productImage: imagePreview ? imagePreview.toString() : '', // Kiểm tra null
        };
        console.log(productData);

        const { statusCode, data } = await Api.putRequest(`/api/admin/editProduct/${id}`, productData);
        if (statusCode === 200) {
            alert('Edit product successful');
            //console.log(data);
        }
    };

    const fetchProduct = async () => {
        const { statusCode, data } = await Api.getRequest(`/api/admin/product/${id}`);
        if (statusCode === 200) {
            setDefaultData(JSON.parse(data).product);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    useEffect(() => {
        if (defaultData) {
            setProduct({
                productName: defaultData.productName || '',
                productPrice: defaultData.productPrice || '',
                productType: defaultData.productType || 'PHONE',
                productCountInStock: defaultData.productCountInStock || 0,
                productImage: defaultData.productImage || '',
                screenSize: defaultData.screenSize || '',
                displayTech: defaultData.displayTech || '',
                chipset: defaultData.chipset || '',
                ramCapacity: defaultData.ramCapacity || '',
                internalStorage: defaultData.internalStorage || '',
            });
        }
    }, [defaultData]); // Cập nhật khi defaultData thay đổi

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
                                    value={product.productName} // Sử dụng state để quản lý giá trị
                                    onChange={handleChange}
                                    // defaultValue={defaultData.productName} // Bỏ dòng này
                                />
                            </div>
                            <div>
                                <label>Product Price:</label>
                                <input
                                    type="number"
                                    name="productPrice"
                                    value={product.productPrice} // Sử dụng state để quản lý giá trị
                                    onChange={handleChange}
                                    // defaultValue={defaultData.productPrice} // Bỏ dòng này
                                />
                            </div>
                            <div>
                                <label>Product Type:</label>
                                <select
                                    name="productType"
                                    value={product.productType} // Sử dụng state để quản lý giá trị
                                    onChange={handleChange}
                                    // defaultValue={defaultData.productType} // Bỏ dòng này
                                >
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
                                    value={product.productCountInStock} // Sử dụng state để quản lý giá trị
                                    onChange={handleChange}
                                    // defaultValue={defaultData.productCountInStock} // Bỏ dòng này
                                />
                            </div>

                            <div>
                                <label>Screen Size:</label>
                                <input
                                    type="text"
                                    name="screenSize"
                                    value={product.screenSize} // Sử dụng state để quản lý giá trị
                                    onChange={handleChange}
                                    // defaultValue={defaultData.screenSize} // Bỏ dòng này
                                />
                            </div>
                            <div>
                                <label>Display Tech:</label>
                                <input
                                    type="text"
                                    name="displayTech"
                                    value={product.displayTech} // Sử dụng state để quản lý giá trị
                                    onChange={handleChange}
                                    // defaultValue={defaultData.displayTech} // Bỏ dòng này
                                />
                            </div>
                            <div>
                                <label>Chip Set:</label>
                                <input
                                    type="text"
                                    name="chipset"
                                    value={product.chipset} // Sử dụng state để quản lý giá trị
                                    onChange={handleChange}
                                    // defaultValue={defaultData.chipset} // Bỏ dòng này
                                />
                            </div>
                            <div>
                                <label>Ram Capacity:</label>
                                <input
                                    type="text"
                                    name="ramCapacity"
                                    value={product.ramCapacity} // Sử dụng state để quản lý giá trị
                                    onChange={handleChange}
                                    // defaultValue={defaultData.ramCapacity} // Bỏ dòng này
                                />
                            </div>
                            <div>
                                <label>Internal Storage:</label>
                                <input
                                    type="text"
                                    name="internalStorage"
                                    value={product.internalStorage} // Sử dụng state để quản lý giá trị
                                    onChange={handleChange}
                                    // defaultValue={defaultData.internalStorage} // Bỏ dòng này
                                />
                            </div>

                            <button type="submit" onClick={handleSubmit}>
                                Update
                            </button>
                        </div>
                        <div className="section-right">
                            <label>Product Image URL:</label>
                            <input
                                type="text"
                                name="productImage"
                                onChange={handleImageChange}
                                defaultValue={defaultData.productImage}
                            />
                            {imagePreview || defaultData.productImage ? (
                                <img
                                    src={imagePreview || defaultData.productImage}
                                    alt="Product Preview"
                                    className="image-preview"
                                />
                            ) : (
                                <img src={imagePreview} alt="Product Preview" className="image-preview" />
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
