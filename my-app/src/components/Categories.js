import Caption from './Caption';
import { IoEyeOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { FaArrowUp } from 'react-icons/fa6';
import { FaArrowDown } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

//Components
import ProductDetail from './ProductDetail';

export default function Categories(props) {
    //lấy thông tin được truyền trong state  của ProductType
    const [close, setClose] = useState(false);
    const location = useLocation();
    const { data } = location.state || {};
    const [productDetailData, setProductDetailData] = useState(null);

    const { productData } = props;

    const [filterData, setFilterData] = useState(productData);

    function filterPhone(state) {
        let filtered;
        switch (state) {
            case 'PHONE':
                filtered = productData.filter((product) => product.productType === 'PHONE');
                break;
            case 'LAPTOP':
                filtered = productData.filter((product) => product.productType === 'LAPTOP');
                break;
            default:
                filtered = productData;
                break;
        }
        setFilterData(filtered); // Cập nhật filterData
    }

    function filterPriceID(state) {
        let filtered;
        switch (state) {
            case 'INCRREMENT':
                filtered = [...productData].sort((a, b) => Number(a.productPrice) - Number(b.productPrice));
                break;
            case 'DECREMENT':
                filtered = [...productData].sort((a, b) => Number(b.productPrice) - Number(a.productPrice));
                break;
            default:
                filtered = productData;
                break;
        }

        setFilterData(filtered); // Cập nhật filterData
    }

    function filterPrice(state) {
        let filtered;
        switch (state) {
            case '0-5.000.000':
                filtered = [...productData].filter((a, b) => Number(a.productPrice) <= 5000000);
                break;
            case '5.000.000-10.000.000':
                filtered = [...productData].filter(
                    (a, b) => Number(a.productPrice) >= 5000000 && Number(a.productPrice) <= 10000000,
                );
                break;
            case 'over 10.000.000':
                filtered = [...productData].filter((a, b) => Number(a.productPrice) >= 10000000);
                break;
            default:
                filtered = productData;
                break;
        }

        setFilterData(filtered); // Cập nhật filterData
    }

    function setSateProduct(productId) {
        const data = productData.filter((product) => {
            return product._id === productId;
        });
        setProductDetailData(data[0]);
    }

    useEffect(() => {
        if (data) {
            setFilterData(data.reverse());
        } else {
            setFilterData(productData.reverse());
        }
    }, [productData]);

    return (
        <>
            <div className="Categories-box">
                <ProductDetail close={close} setClose={setClose} productDetailData={productDetailData} />
                <div className="box">
                    <div className="box-left">
                        <div className=" cap-main">Categories</div>
                        <div className="cap cap-product" onClick={() => filterPhone()}>
                            All
                        </div>
                        <div className="cap cap-product" onClick={() => filterPhone('PHONE')}>
                            Phone
                        </div>
                        <div className="cap cap-product" onClick={() => filterPhone('LAPTOP')}>
                            Laptop
                        </div>
                        {/*  <div className="cap cap-product" onClick={() => filterPhone('HEADPHONE')}>
                            Headphone
                        </div>
                        <div className="cap cap-product" onClick={() => filterPhone('WATCH')}>
                            Watch
                        </div> */}
                        <div className="cap-normal">Price </div>
                        <div className="price-up-down">
                            <FaArrowUp className="price-lowToUp" onClick={() => filterPriceID('INCRREMENT')} />
                            <FaArrowDown className="price-upToLow" onClick={() => filterPriceID('DECREMENT')} />
                        </div>
                        <div className="option-container">
                            <div className="price-option">
                                <input
                                    type="radio"
                                    value="1"
                                    name="Price1"
                                    onClick={() => filterPrice('0-5.000.000')}
                                />
                                <div className="cap-norma2">0 - 5.000.000Đ</div>
                            </div>
                            <div className="price-option">
                                <input
                                    type="radio"
                                    value="1"
                                    name="Price1"
                                    onClick={() => filterPrice('5.000.000-10.000.000')}
                                />
                                <div className="cap-norma2">5.000.000 - 10.000.000Đ</div>
                            </div>
                            <div className="price-option">
                                <input
                                    type="radio"
                                    value="1"
                                    name="Price1"
                                    onClick={() => filterPrice('over 10.000.000')}
                                />

                                <div className="cap-norma2"> over 10.000.000Đ</div>
                            </div>
                        </div>
                    </div>
                    <div className="box-right">
                        <div className="grid-container ">
                            {filterData && filterData.length > 0 ? (
                                filterData.map((product, index) => (
                                    <div
                                        key={index}
                                        className="grid-item"
                                        onClick={() => {
                                            setSateProduct(product._id);

                                            setClose(!close);
                                        }}
                                    >
                                        <div className="image-container">
                                            <img src={`${product.productImage}`} alt="NULL" />
                                        </div>
                                        <div className="productName">{product.productName || 'NULL'}</div>
                                        <div className="productPrice">
                                            {new Intl.NumberFormat('vi-VN').format(product.productPrice)} đ
                                        </div>
                                        {product.discount ? (
                                            <>
                                                <div className="discount">{product.discount}</div>
                                                <div className="productPrice_discounted">
                                                    {product.discountedPrice || 'NULL'}
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                ))
                            ) : (
                                <div className="grid-item">NULL</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
