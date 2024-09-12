import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Bill_detail() {
    const { id } = useParams();
    const [billData, setBillData] = useState(null);

    useEffect(() => {
        // Fetch bill data here (replace with actual API call)
        // For now, we'll just set some dummy data
        setBillData({ id: id, amount: 100, date: '2023-04-15' });
    }, [id]);

    if (!billData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bill-cont">
            <div className="title-cont">
                <div className="title">Bill</div>
                <div className="order-code">Oder code: 31234123123</div>
            </div>
            <div className="billDetail-cont">
                <div className="info-item">
                    <div className="item">
                        <div className="img-cont">
                            <img src={require('../../resources/Phone/iphone-15-plus_1__1.webp')} alt="" />
                        </div>
                        <div className="item-info">
                            <div className="item-name">Iphone 15 Plus</div>
                            <div className="item-price">Price: 20.000.000</div>
                            <div className="item-quantity">Quantity: 2</div>
                            <div className="item-total">
                                <div>Total:</div>
                                <div>40.000.000</div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-cont">
                            <img src={require('../../resources/Phone/iphone-15-plus_1__1.webp')} alt="" />
                        </div>
                        <div className="item-info">
                            <div className="item-name">Iphone 15 Plus</div>
                            <div className="item-price">Price: 20.000.000</div>
                            <div className="item-quantity">Quantity: 2</div>
                            <div className="item-total">
                                <div>Total:</div>
                                <div>40.000.000</div>
                            </div>
                        </div>
                    </div>
                    <div className="total-price">
                        <div className="total-price-text">Total price</div>
                        <div className="total-price-value">20.000.000</div>
                    </div>
                </div>
                <div className="customer-shipping-info">
                    <div className="customer-info">
                        <div className="info-item item">
                            Họ và tên: <strong>QTV</strong>
                        </div>
                        <div className="info-item item">
                            Địa chỉ: <strong>Xã Hùng Sơn, Huyện Hiệp Hòa, Tỉnh Bắc Giang</strong>
                        </div>
                        <div className="info-item item">
                            Địa chỉ giao hàng: <strong>Hẻm 51</strong>
                        </div>
                        <div className="info-item item">
                            Số điện thoại: <strong>0336216546</strong>
                        </div>
                        <div className="info-item item">
                            Ghi chú: <strong>gói hàng kĩ</strong>
                        </div>
                    </div>
                    <div className="shipping-info">
                        <div className="order-info">
                            <div>Mã đơn hàng: 2024072806155766A5E21D4F2E5</div>
                            <div>
                                Trạng thái đơn hàng: <span className="status">pending</span>
                            </div>
                            <div>Ngày: 28/07/2024</div>
                            <div>Email: admin@gmail.com</div>
                            <div>Tổng cộng: 58.180.000₫</div>
                            <div>
                                Phương thức thanh toán:{' '}
                                <span className="payment-method">Trả tiền mặt khi nhận hàng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
