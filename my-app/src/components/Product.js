import Caption from './Caption';
import { IoEyeOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';

const Product = (props) => {
    const { productData } = props;
    return (
        <div className="grid-newproduct">
            <Caption cap={props.cap} />
            <div className="grid-container">
                {productData && productData.length > 0 ? (
                    productData.map((product, index) => (
                        <div
                            key={index}
                            className="grid-item"
                            onClick={() => {
                                props.setClose(!props.close);
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
