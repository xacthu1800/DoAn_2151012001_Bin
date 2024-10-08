import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../utils/Api';

export default function Order_detail() {
    const { id } = useParams();
    const [dataDetail, setDataDetail] = useState(null);

    const [pendingList, setPendingList] = useState({});
    const [processingList, setProcessingList] = useState({});
    const [completedList, setCompletedList] = useState({});

    const fetchBillDetailData = async () => {
        const { statusCode, data } = await Api.getRequest(`/api/admin/bill/${id}`);
        const { status, message, billDetail } = JSON.parse(data);
        setDataDetail(billDetail);
    };

    const formattedDate = () => {
        if (dataDetail && dataDetail.time) {
            const [year, month, day, hour, minute, second] = dataDetail.time.split('-');
            return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
        }
        return '';
    };

    useEffect(() => {
        fetchBillDetailData();
        console.log(dataDetail);
        console.log(pendingList);
        console.log(processingList);
        console.log(completedList);
    }, [id]);

    /*   if (!billData) {
        return <div>Loading...</div>;
    } */

    return dataDetail ? (
        <div className="bill-cont">
            <div className="title-cont">
                <div className="order-code">Oder detail</div>
            </div>
            <div className="billDetail-cont">
                <div className="info-item">
                    {dataDetail.cartItems.map((item) => (
                        <div className="item">
                            <div className="img-cont">
                                <img src={item.imageUrl} alt="" />
                            </div>
                            <div className="item-info">
                                <div className="item-name">{item.name}</div>
                                <div className="item-price">Price: {Number(item.price).toLocaleString('vi-VN')} đ</div>
                                <div className="item-quantity">Quantity: {item.qty}</div>
                                <div className="item-total">
                                    <div>Total:</div>
                                    <div>{(Number(item.price) * Number(item.qty)).toLocaleString('vi-VN')} đ</div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="total-price">
                        <div className="total-price-text">Total price</div>
                        <div className="total-price-value">{Number(dataDetail.sumPrice).toLocaleString('vi-VN')} đ</div>
                    </div>
                </div>
                <div className="customer-shipping-info">
                    <div className="customer-info">
                        <div className="info-item item">
                            Họ và tên: <strong>{dataDetail.userFullname}</strong>
                        </div>
                        <div className="info-item item">
                            Địa chỉ: <strong>{dataDetail.userAddress}</strong>
                        </div>

                        <div className="info-item item">
                            Số điện thoại: <strong>{dataDetail.userPhoneNumber}</strong>
                        </div>
                        <div className="info-item item">
                            Ghi chú: <strong>{dataDetail.userNote}</strong>
                        </div>
                    </div>
                    <div className="shipping-info">
                        <div className="order-info">
                            <div>Mã đơn hàng: {id}</div>
                            <div>
                                Trạng thái đơn hàng:{' '}
                                <span
                                    className="status"
                                    style={{
                                        color:
                                            dataDetail.state === 'pending'
                                                ? 'orange'
                                                : dataDetail.state === 'completed'
                                                ? 'green'
                                                : 'blue',
                                    }}
                                >
                                    {dataDetail.state}
                                </span>
                            </div>
                            <div>Ngày: {formattedDate()}</div>
                            <div>
                                Phương thức thanh toán: <span className="payment-method">{dataDetail.userPayment}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
}
