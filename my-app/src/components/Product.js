import Caption from './Caption';
import { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import { toast } from 'react-toastify';

const Product = (props) => {
    const [close, setClose] = useState(false);
    const { productData, productType } = props;
    const [productDetailData, setProductDetailData] = useState(null);
    /* console.log('original data:');
            console.log(productData); */

    let dataFilterType = productData
        .filter((product) => {
            return product.productType === productType;
        })
        .reverse()
        .slice(0, 4);
    /*console.log('Phone Data:');
            console.log(dataFilterType); */

    function setSateProduct(productId) {
        const data = productData.filter((product) => {
            return product._id === productId;
        });
        setProductDetailData(data[0]);
    }

    useEffect(() => {
        setProductDetailData(null);
    }, [props.productType]);

    return (
        <div className="grid-newproduct">
            <Caption cap={props.cap} />
            <ProductDetail close={close} setClose={setClose} productDetailData={productDetailData} />

            <div className="grid-container">
                {dataFilterType && dataFilterType.length > 0 ? (
                    dataFilterType.map((product, index) => (
                        <div
                            key={index}
                            className="grid-item"
                            onClick={() => {
                                setSateProduct(product._id);

                                setClose(!props.close);
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
                                    <div className="productPrice_discounted">{product.discountedPrice || 'NULL'}</div>
                                </>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div className="grid-item">NULL</div>
                )}
            </div>
        </div>
    );
};

export default Product;
