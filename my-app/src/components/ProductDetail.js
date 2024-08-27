import { IoEyeOutline } from 'react-icons/io5';
import { LiaCartPlusSolid } from 'react-icons/lia';

export default function ProductDetail({ product, setProduct, close, setClose }) {
    return (
        <>
            {close ? (
                <div className="productDetail">
                    <div className="container">
                        <div className="container-wrap">
                            <div className="con-left">
                                <div className="img-wrap">
                                    <img src={require('../resources/Phone/iphone-15-plus_1__1.webp')} />
                                </div>
                                <div className="name-price">
                                    <div className="name">iphone 15</div>
                                    <div className="price">10.000.000 USD</div>
                                </div>
                            </div>

                            <div className="con-right">
                                <div className="icon">
                                    <button>
                                        <LiaCartPlusSolid />
                                    </button>
                                    <button onClick={() => setClose(false)} className="closebtn">
                                        <IoEyeOutline />
                                    </button>
                                </div>
                                <div className="Product-detail">
                                    <h2 style={{ borderBottom: '6px solid black' }}>Product Detail</h2>
                                    <table className="specs-table">
                                        <tr>
                                            <th>Thông Số</th>
                                            <th>Chi Tiết</th>
                                        </tr>
                                        <tr>
                                            <td>Model</td>
                                            <td>XYZ Smartphone</td>
                                        </tr>
                                        <tr>
                                            <td>Màn hình</td>
                                            <td>6.5 inch, OLED, 1080 x 2400 pixels</td>
                                        </tr>
                                        <tr>
                                            <td>Chipset</td>
                                            <td>Snapdragon 888</td>
                                        </tr>
                                        <tr>
                                            <td>RAM</td>
                                            <td>8GB</td>
                                        </tr>
                                        <tr>
                                            <td>Chipset</td>
                                            <td>Snapdragon 888</td>
                                        </tr>
                                        <tr>
                                            <td>RAM</td>
                                            <td>8GB</td>
                                        </tr>
                                        <tr>
                                            <td>Bộ nhớ trong</td>
                                            <td>128GB</td>
                                        </tr>
                                        <tr>
                                            <td>Camera chính</td>
                                            <td>108 MP + 12 MP + 8 MP</td>
                                        </tr>
                                        <tr>
                                            <td>Bộ nhớ trong</td>
                                            <td>128GB</td>
                                        </tr>
                                        <tr>
                                            <td>Camera chính</td>
                                            <td>108 MP + 12 MP + 8 MP</td>
                                        </tr>
                                        <tr>
                                            <td>Bộ nhớ trong</td>
                                            <td>128GB</td>
                                        </tr>
                                        <tr>
                                            <td>Camera chính</td>
                                            <td>108 MP + 12 MP + 8 MP</td>
                                        </tr>
                                        <tr>
                                            <td>Bộ nhớ trong</td>
                                            <td>128GB</td>
                                        </tr>
                                        <tr>
                                            <td>Camera chính</td>
                                            <td>108 MP + 12 MP + 8 MP</td>
                                        </tr>
                                        <tr>
                                            <td>Bộ nhớ trong</td>
                                            <td>128GB</td>
                                        </tr>
                                        <tr>
                                            <td>Camera chính</td>
                                            <td>108 MP + 12 MP + 8 MP</td>
                                        </tr>
                                        <tr>
                                            <td>Camera trước</td>
                                            <td>32 MP</td>
                                        </tr>
                                        <tr>
                                            <td>Pin</td>
                                            <td>4500 mAh</td>
                                        </tr>
                                        <tr>
                                            <td>Hệ điều hành</td>
                                            <td>Android 12</td>
                                        </tr>
                                        <tr>
                                            <td>Kết nối</td>
                                            <td>5G, Wi-Fi 6, Bluetooth 5.2</td>
                                        </tr>
                                        <tr>
                                            <td>Kết nối</td>
                                            <td>5G, Wi-Fi 6, Bluetooth 5.2</td>
                                        </tr>
                                        <tr>
                                            <td>Kết nối</td>
                                            <td>5G, Wi-Fi 6, Bluetooth 5.2</td>
                                        </tr>
                                        <tr>
                                            <td>Kết nối</td>
                                            <td>5G, Wi-Fi 6, Bluetooth 5.2</td>
                                        </tr>
                                        <tr>
                                            <td>Kết nối</td>
                                            <td>5G, Wi-Fi 6, Bluetooth 5.2</td>
                                        </tr>
                                        <tr>
                                            <td>Kết nối</td>
                                            <td>5G, Wi-Fi 6, Bluetooth 5.2</td>
                                        </tr>
                                        <tr>
                                            <td>Kết nối</td>
                                            <td>5G, Wi-Fi 6, Bluetooth 5.2</td>
                                        </tr>
                                        <tr>
                                            <td>Kết nối</td>
                                            <td>5G, Wi-Fi 6, Bluetooth 5.2</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
