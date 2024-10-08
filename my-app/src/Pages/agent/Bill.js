import { Routes, Route, Link } from 'react-router-dom';
import Bill_detail from './Bill_detail';

import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Bill() {
    return (
        <Routes>
            <Route path="/" element={<BillList />} />
            <Route path="Bill_detail/:id" element={<Bill_detail />} />
        </Routes>
    );
}

function BillList() {
    const [listBill, setListBill] = useState([]);
    const [state, setState] = useState(true);

    const fetchBillList = async () => {
        const { statusCode, data } = await Api.getRequest('/api/admin/bill');
        //console.log(data);
        const { status, message, billList } = JSON.parse(data);
        const filterBillList = billList.filter((bill) => bill.agentName == localStorage.getItem('userName'));
        console.log('billList:', billList);
        console.log('agentName:', localStorage.getItem('userName'));
        console.log(filterBillList);
        setListBill(filterBillList.reverse());
    };

    const formattedDate = (x) => {
        if (x) {
            const [year, month, day] = x.split('-');
            return `${day}/${month}/${year}`;
        }
        return '';
    };

    const handleChangeState = async (id, newState) => {
        const { statusCode, data } = await Api.putRequest(`/api/admin/bill/${id}`, { state: newState });
        const { status, message } = JSON.parse(data);
        if (status === 200) {
            fetchBillList();
        }
        setState(!state);
    };

    useEffect(() => {
        fetchBillList();
    }, [state]);

    useEffect(() => {}, [listBill]);

    return (
        <>
            <div className="bill-cont">
                <div className="title-cont">
                    <div className="title">Bill</div>
                    <div className="state">
                        {/* <select className="list-state" name="type-state">
                            <option value="PEN" style={{ color: 'orange' }}>
                                PENDING
                            </option>
                            <option value="COM" style={{ color: 'green' }}>
                                COMPLETED
                            </option>
                            <option value="PRO" style={{ color: 'blue' }}>
                                PROCESSING
                            </option>
                        </select> */}
                    </div>
                </div>
                <div className="bill-list-cont">
                    <div className="bill-list">
                        <div className="grid-container ">
                            <div className="bill-item">STT</div>
                            <div className="bill-item">Order Code</div>
                            <div className="bill-item">Customer</div>
                            <div className="bill-item">Date Order</div>
                            <div className="bill-item">Total Price</div>
                            <div className="bill-item">State</div>
                            <div className="bill-item">Change State</div>
                        </div>

                        {listBill.map((bill, index) => (
                            <div className="grid-container ">
                                <div className="bill-item">{index + 1}</div>
                                <div className="bill-item">
                                    <Link to={`Bill_detail/${bill._id}`} className="content hover">
                                        {bill._id}
                                    </Link>
                                </div>
                                <div className="bill-item">
                                    <div className="content">{bill.userId}</div>
                                </div>
                                <div className="bill-item">{formattedDate(bill.time)}</div>
                                <div className="bill-item">{Number(bill.sumPrice).toLocaleString('vi-VN')} đ</div>
                                <div
                                    className="bill-item"
                                    style={{
                                        color:
                                            bill.state === 'pending'
                                                ? 'orange'
                                                : bill.state === 'processing'
                                                ? 'blue'
                                                : 'green',

                                        fontWeight: 'bolder',
                                    }}
                                >
                                    {bill.state}
                                </div>
                                <div className="bill-item">
                                    <select
                                        className="list-state"
                                        name="type-state"
                                        onChange={(e) => handleChangeState(bill._id, e.target.value)}
                                    >
                                        <option
                                            value={bill.state}
                                            style={{
                                                color:
                                                    bill.state === 'pending'
                                                        ? 'orange'
                                                        : bill.state === 'processing'
                                                        ? 'blue'
                                                        : 'green',
                                            }}
                                        >
                                            {bill.state === 'pending'
                                                ? 'PENDING'
                                                : bill.state === 'completed'
                                                ? 'COMPLETED'
                                                : 'PROCESSING'}
                                        </option>
                                        {bill.state !== 'pending' && (
                                            <option value="pending" style={{ color: 'orange' }}>
                                                PENDING
                                            </option>
                                        )}
                                        {bill.state !== 'completed' && (
                                            <option value="completed" style={{ color: 'green' }}>
                                                COMPLETED
                                            </option>
                                        )}
                                        {bill.state !== 'processing' && (
                                            <option value="processing" style={{ color: 'blue' }}>
                                                PROCESSING
                                            </option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
