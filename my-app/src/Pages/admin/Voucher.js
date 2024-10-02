import { Routes, Route, Link } from 'react-router-dom';
import Voucher_Add from './Voucher_Add';
import Voucher_Update from './Voucher_Update';
import { useState, useEffect } from 'react';
import { Api } from '../../utils/Api';
import { toast } from 'react-toastify';

export default function Voucher() {
    return (
        <Routes>
            <Route path="/" element={<Voucher_template />} />
            <Route path="Voucher/Voucher_Add" element={<Voucher_Add />} />
            <Route path="Voucher/Voucher_Update/:id" element={<Voucher_Update />} />
        </Routes>
    );
}

function Voucher_template() {
    const [voucherList, setVoucherList] = useState([]);

    useEffect(() => {
        fetchVouchers();
    }, [voucherList]);

    const fetchVouchers = async () => {
        const { statusCode, data } = await Api.getRequest('/api/admin/voucher');
        const { voucherList } = JSON.parse(data);
        setVoucherList(voucherList);
        console.log(voucherList);
    };

    const handleDeleteVoucher = async (e, id) => {
        e.preventDefault();
        const { statusCode, data } = await Api.deleteRequest(`/api/admin/voucher/${id}`);
        if (statusCode === 200) {
            toast.success('Xóa thành công');
            fetchVouchers();
        }
    };

    return (
        <div className="bill-cont">
            <div className="title-cont">
                <div className="title">Voucher </div>
                <div>
                    <button className="add-btn">
                        <Link to="Voucher/Voucher_Add" className="voucher-link">
                            Add new voucher
                        </Link>
                    </button>
                </div>
            </div>
            <div className="cap-below">
                <div className="voucher-cont">
                    <table className="voucher-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>CODE</th>
                                <th>DATE START</th>
                                <th>DATE END</th>
                                <th>QUANTITY</th>
                                <th>USED</th>
                                <th>DISCOUNT (%)</th>
                                <th>MAX DISCOUNT</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {voucherList.map((voucher, index) => (
                                <tr key={voucher._id}>
                                    <td>{index + 1}</td>
                                    <td>{voucher.code}</td>
                                    <td>{voucher.startDate}</td>
                                    <td>{voucher.endDate}</td>
                                    <td>{voucher.quantity}</td>
                                    <td>{voucher.used}</td>
                                    <td>{voucher.discountPercentage}</td>
                                    <td>{Number(voucher.maxDiscount).toLocaleString('vi-VN')} đ</td>
                                    <td>
                                        <button className="edit-btn">
                                            <Link to={`Voucher/Voucher_Update/${voucher._id}`}>SỬA</Link>
                                        </button>
                                        <button
                                            className="delete-btn"
                                            onClick={(e) => handleDeleteVoucher(e, voucher._id)}
                                        >
                                            XÓA
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
