import { Routes, Route, Link } from 'react-router-dom';
import Voucher_Add from './Voucher_Add';
import Voucher_Update from './Voucher_Update';

export default function Voucher() {
    return (
        <Routes>
            <Route path="/" element={<Voucher_template />} />
            <Route path="Voucher/Voucher_Add" element={<Voucher_Add />} />
            <Route path="Voucher/Voucher_Update" element={<Voucher_Update />} />
        </Routes>
    );
}

function Voucher_template() {
    const vouchers = [
        {
            id: 1,
            code: 'GIAMGIA20',
            startDate: '2024-06-17',
            endDate: '2024-06-30',
            quantity: 50,
            used: 8,
            discount: '20%',
            maxDiscount: '500.000đ',
        },
        {
            id: 2,
            code: 'HET',
            startDate: '2024-06-20',
            endDate: '2024-06-21',
            quantity: 1,
            used: 0,
            discount: '50%',
            maxDiscount: '1.000.000đ',
        },
        {
            id: 3,
            code: 'km2024',
            startDate: '2024-07-24',
            endDate: '2024-08-01',
            quantity: 10,
            used: 1,
            discount: '5%',
            maxDiscount: '1.000.000đ',
        },
    ];

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
                                <th>NGÀY BẮT ĐẦU</th>
                                <th>NGÀY KẾT THÚC</th>
                                <th>SỐ LƯỢNG</th>
                                <th>ĐÃ DÙNG</th>
                                <th>GIẢM GIÁ (%)</th>
                                <th>GIẢM TỐI ĐA</th>
                                <th>HÀNH ĐỘNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vouchers.map((voucher, index) => (
                                <tr key={voucher.id}>
                                    <td>{index + 1}</td>
                                    <td>{voucher.code}</td>
                                    <td>{voucher.startDate}</td>
                                    <td>{voucher.endDate}</td>
                                    <td>{voucher.quantity}</td>
                                    <td>{voucher.used}</td>
                                    <td>{voucher.discount}</td>
                                    <td>{voucher.maxDiscount}</td>
                                    <td>
                                        <button className="edit-btn">
                                            <Link to="Voucher/Voucher_Update">SỬA</Link>
                                        </button>
                                        <button className="delete-btn">XÓA</button>
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
