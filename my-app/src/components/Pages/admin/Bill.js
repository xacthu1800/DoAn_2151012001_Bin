import { Routes, Route, Link } from 'react-router-dom';
import Bill_detail from './Bill_detail';

export default function Bill() {
    return (
        <Routes>
            <Route path="/" element={<BillList />} />
            <Route path="Bill_detail/:id" element={<Bill_detail />} />
        </Routes>
    );
}

function BillList() {
    return (
        <>
            <div className="bill-cont">
                <div className="title-cont">
                    <div className="title">Bill</div>
                    <div className="state">
                        <select className="list-state" name="type-state">
                            <option value="PEN" style={{ color: 'orange' }}>
                                PENDING
                            </option>
                            <option value="COM" style={{ color: 'green' }}>
                                COMPLETED
                            </option>
                            <option value="PRO" style={{ color: 'blue' }}>
                                PROCESSING
                            </option>
                        </select>
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

                        <div className="grid-container ">
                            <div className="bill-item">1</div>
                            <div className="bill-item">
                                <Link to="Bill_detail/31234123123">31234123123</Link>
                            </div>
                            <div className="bill-item">
                                <div className="name">Nguyen Van Bin</div>
                                <div className="phoneNum">0932960437</div>
                            </div>
                            <div className="bill-item">20/7/2022</div>
                            <div className="bill-item">20.000.000</div>
                            <div className="bill-item">Processing</div>
                            <div className="bill-item">
                                <select className="list-state" name="type-state">
                                    <option value="PEN" style={{ color: 'orange' }}>
                                        PENDING
                                    </option>
                                    <option value="COM" style={{ color: 'green' }}>
                                        COMPLETED
                                    </option>
                                    <option value="PRO" style={{ color: 'blue' }}>
                                        PROCESSING
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
