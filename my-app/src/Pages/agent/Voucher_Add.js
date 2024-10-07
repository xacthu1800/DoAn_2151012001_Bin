import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import Voucher from './Voucher';
import { useState, useEffect } from 'react';
import { Api } from '../../utils/Api';
import { toast } from 'react-toastify';
export default function Voucher_Add() {
    return (
        <Routes>
            <Route path="/" element={<Voucher_Add_template />} />
            <Route path="Voucher" element={<Voucher />} />
        </Routes>
    );
}

function Voucher_Add_template() {
    const [code, setCode] = useState('');
    const [quantity, setQuantity] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [maxDiscount, setMaxDiscount] = useState('');
    const [used, setUsed] = useState('0');

    useEffect(() => {}, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Chuyển đổi định dạng ngày từ yyyy-mm-dd sang dd-mm-yyyy

        const { statusCode, data } = await Api.postRequest('/api/admin/voucher', {
            code: code.toUpperCase().toString(),
            quantity: quantity.toString(),
            discountPercentage: discountPercentage.toString(),
            startDate: startDate.toString(),
            endDate: endDate.toString(),
            used: used.toString(),
            maxDiscount: maxDiscount.toString(),
        });
        if (statusCode === 200) {
            toast.success('Thêm mã giảm giá thành công');
            window.location.reload();
        } else {
            toast.error('Thêm mã giảm giá thất bại');
        }
    };

    return (
        <div className="bill-cont">
            <div className="title-cont">
                <div className="title">Voucher Adding</div>
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
                                <input type="text" name="code" value={code} onChange={(e) => setCode(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Số lượng</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Giảm giá (%)</label>
                                <input
                                    type="number"
                                    name="discount_percentage"
                                    value={discountPercentage}
                                    onChange={(e) => setDiscountPercentage(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="right">
                            <div className="form-group">
                                <label>Ngày bắt đầu</label>
                                <input
                                    type="date"
                                    name="start_date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Ngày kết thúc</label>
                                <input
                                    type="date"
                                    name="end_date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Giảm tối đa</label>
                                <input
                                    type="number"
                                    name="max_discount"
                                    value={maxDiscount}
                                    onChange={(e) => setMaxDiscount(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="add-btn" onClick={handleSubmit}>
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
