import { BsFillCartCheckFill } from 'react-icons/bs';

import { useState } from 'react';

export default function User_MembershipoClass() {
    const [status, setStatus] = useState(0);
    const handleStatusChange = (value) => {
        setStatus(value);
    };
    return (
        <>
            <div className="membership-class">
                <div className="section user-infor">
                    <div>
                        <h1>Nguyen Van Bin</h1>
                        <h3>0932960437</h3>
                    </div>
                    <div className="rank">Snew</div>
                </div>
                <div className="section class">
                    <div className="block-info">
                        <div className="block-left">
                            <div className="name">culmilative total</div>
                            <div className="culmilative-total">40.000.000 Đ</div>
                        </div>
                        <div className="block-right">
                            <div className="rank">SNew</div>
                        </div>
                    </div>
                    <div className="block-ranking">
                        <input type="range" min="1" max="20000" value={12000} readOnly className="slider" />
                        <div className="need">You need to spend more 10,000,000 đ to level up to S-mem </div>
                    </div>
                </div>
                <div className="section rank-list">
                    <form>
                        <div className="rank-level">
                            <div className="block">
                                <img
                                    className="option"
                                    src={require('../resources/S-NEW.webp')}
                                    alt="img"
                                    onClick={() => handleStatusChange(0)}
                                />
                                <div>S-NEW</div>
                            </div>
                            <div className="block">
                                <img
                                    className="option"
                                    src={require('../resources/S-MEM.webp')}
                                    alt="img"
                                    onClick={() => handleStatusChange(1)}
                                />
                                <div>S-MEM</div>
                            </div>
                            <div className="block">
                                <img
                                    className="option"
                                    src={require('../resources/S-VIP.webp')}
                                    alt="img"
                                    onClick={() => handleStatusChange(2)}
                                />
                                <div>S-VIP</div>
                            </div>
                        </div>
                    </form>
                    <div className="cont-rank-list">
                        <div>
                            {status === 0 && (
                                <div>
                                    <h1 className="state">S-NEW</h1>
                                    <div className="condition-cont">
                                        <div className="condition">Condition</div>
                                        <div className="condition-content">
                                            <BsFillCartCheckFill className="icon" />
                                            <div className="content">
                                                Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước đạt từ 15
                                                đến 50 triệu đồng, không tính đơn hàng doanh nghiệp B2B
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {status === 1 && (
                                <div>
                                    <div>
                                        <h1 className="state">S-MEM</h1>
                                        <div className="condition-cont">
                                            <div className="condition">Condition</div>
                                            <div className="condition-content">
                                                <BsFillCartCheckFill className="icon" />
                                                <div className="content">
                                                    Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước đạt
                                                    từ 15 đến 50 triệu đồng, không tính đơn hàng doanh nghiệp B2B
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {status === 2 && (
                                <div>
                                    <div>
                                        <h1 className="state">S-VIP</h1>
                                        <div className="condition-cont">
                                            <div className="condition">Condition</div>
                                            <div className="condition-content">
                                                <BsFillCartCheckFill className="icon" />
                                                <div className="content">
                                                    Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước đạt
                                                    từ 15 đến 50 triệu đồng, không tính đơn hàng doanh nghiệp B2B
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
