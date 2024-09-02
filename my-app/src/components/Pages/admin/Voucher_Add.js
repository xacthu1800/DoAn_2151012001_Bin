import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import Voucher from './Voucher';
export default function Voucher_Add() {
    return (
        <Routes>
            <Route path="/" element={<Voucher_Add_template />} />
            <Route path="Voucher" element={<Voucher />} />
        </Routes>
    );
}

function Voucher_Add_template() {
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
                                <input type="text" name="code" />
                            </div>
                            <div className="form-group">
                                <label>Số lượng</label>
                                <input type="number" name="quantity" />
                            </div>
                            <div className="form-group">
                                <label>Giảm giá (%)</label>
                                <input type="number" name="discount_percentage" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="form-group">
                                <label>Ngày bắt đầu</label>
                                <input type="date" name="start_date" />
                            </div>
                            <div className="form-group">
                                <label>Ngày kết thúc</label>
                                <input type="date" name="end_date" />
                            </div>

                            <div className="form-group">
                                <label>Giảm tối đa</label>
                                <input type="number" name="max_discount" />
                            </div>
                        </div>
                        <button type="submit" className="add-btn">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
