import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { Api } from '../../utils/Api';
import { toast } from 'react-toastify';

export default function Voucher_Update() {
    return (
        <Routes>
            <Route path="/" element={<Voucher_Update_template />} />
        </Routes>
    );
}

function Voucher_Update_template() {
    const { id } = useParams();
    const [voucherData, setVoucherData] = useState(null);

    const fetchVoucherDetail = async () => {
        const { statusCode, data } = await Api.getRequest(`/api/admin/voucher/${id}`);
        const { voucher } = JSON.parse(data);
        if (statusCode === 200) {
            setVoucherData(voucher);
        }
    };

    /*  const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('-');
        return `${year}-${month}-${day}`;
    }; */

    const handleUpdateVoucher = async (e) => {
        e.preventDefault();
        const { statusCode, data } = await Api.putRequest(`/api/admin/voucher/${id}`, voucherData);
        if (statusCode === 200) {
            toast.success('Cập nhật thành công');
        } else {
            toast.error('Cập nhật thất bại');
        }
    };

    useEffect(() => {
        fetchVoucherDetail();
    }, [id]);

    return (
        <>
            {voucherData ? (
                <div className="bill-cont">
                    <div className="title-cont">
                        <div className="title">Voucher: {voucherData.code}</div>
                        <div>
                            <button className="add-btn">
                                <Link to="/Admin/Voucher" className="voucher-link back-btn">
                                    <IoMdArrowBack />
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="cap-below">
                        <div className="voucher_add-cont">
                            <form>
                                <div className="left">
                                    <div className="form-group">
                                        <label>Code</label>
                                        <input
                                            type="text"
                                            name="code"
                                            value={voucherData.code}
                                            onChange={(e) => {
                                                setVoucherData({
                                                    ...voucherData,
                                                    code: e.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Số lượng</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={voucherData.quantity}
                                            onChange={(e) => {
                                                setVoucherData({
                                                    ...voucherData,
                                                    quantity: e.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Giảm giá (%)</label>
                                        <input
                                            type="number"
                                            name="discount_percentage"
                                            value={voucherData.discountPercentage}
                                            onChange={(e) => {
                                                setVoucherData({
                                                    ...voucherData,
                                                    discountPercentage: e.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="form-group">
                                        <label>Ngày bắt đầu</label>
                                        <input
                                            type="date"
                                            name="start_date"
                                            value={voucherData.startDate}
                                            onChange={(e) => {
                                                setVoucherData({
                                                    ...voucherData,
                                                    startDate: e.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Ngày kết thúc</label>
                                        <input
                                            type="date"
                                            name="end_date"
                                            value={voucherData.endDate}
                                            onChange={(e) => {
                                                setVoucherData({
                                                    ...voucherData,
                                                    endDate: e.target.value,
                                                });
                                            }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Giảm tối đa</label>
                                        <input
                                            type="number"
                                            name="max_discount"
                                            value={voucherData.maxDiscount}
                                            onChange={(e) => {
                                                setVoucherData({
                                                    ...voucherData,
                                                    maxDiscount: e.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="add-btn" onClick={(e) => handleUpdateVoucher(e)}>
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
