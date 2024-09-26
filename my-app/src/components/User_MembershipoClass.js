import { BsFillCartCheckFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function User_MembershipoClass() {
    const [user, setUser] = useState([]);
    const [dataHTML, setDataHTML] = useState([]);

    const userData = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [message, setMessage] = useState('Default');

    const [status, setStatus] = useState(0);
    const handleStatusChange = (value) => {
        setStatus(value);
    };

    const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/api/user/HomePage/${userData.userInfo.details._id}`);
        const data = await response.json();
        const { userOrderedList, user } = data;
        setUser(user[0]);
        const dataHTML = [];
        userOrderedList.forEach((item) => {
            item.forEach((item2) => {
                dataHTML.push(item2);
            });
        });
        setDataHTML(dataHTML.reverse());
    };

    const handleCumulativeBar = (cumulative) => {
        if (cumulative < 10000000) {
            setStart(0);
            setEnd(10000000);
            setMessage(
                `You need to spend more ${(10000000 - cumulative).toLocaleString('vi-VN')} đ to level up to S-Silver`,
            );
        }
        if (cumulative >= 10000000 && cumulative < 50000000) {
            setStart(10000000);
            setEnd(50000000);
            setMessage(
                `You need to spend more ${(50000000 - cumulative).toLocaleString('vi-VN')} đ to level up to S-Gold`,
            );
        }
        if (cumulative >= 50000000 && cumulative < 100000000) {
            setStart(50000000);
            setEnd(100000000);
            setMessage(
                `You need to spend more ${(100000000 - cumulative).toLocaleString('vi-VN')} đ to level up to S-VIP`,
            );
        }
        if (cumulative >= 100000000) {
            setStart(0);
            setEnd(100000000);
            setMessage(`You are our VIP customer`);
        }
    };

    useEffect(() => {
        if (!userData.userInfo.isLogin) {
            navigate('/');
            return;
        }
        fetchData();
    }, []);

    useEffect(() => {
        handleCumulativeBar(Number(user.cumulativeTotal));
    }, [user]);

    return (
        <>
            <div className="membership-class">
                <div className="section user-infor">
                    <div>
                        <h1>{user.userName}</h1>
                    </div>
                    <div className="rank">
                        {user.class === '0'
                            ? 'Snew'
                            : user.class === '1'
                            ? 'Silver'
                            : user.class === '2'
                            ? 'Gold'
                            : 'VIP'}
                    </div>
                </div>
                <div className="section class">
                    <div className="block-info">
                        <div className="block-left">
                            <div className="name">culmilative total</div>
                            <div className="culmilative-total">
                                {Number(user.cumulativeTotal).toLocaleString('vi-VN')} Đ
                            </div>
                        </div>
                        <div className="block-right">
                            <div className="rank">
                                {user.class === '0'
                                    ? 'Snew'
                                    : user.class === '1'
                                    ? 'Silver'
                                    : user.class === '2'
                                    ? 'Gold'
                                    : 'VIP'}
                            </div>
                        </div>
                    </div>
                    <div className="block-ranking">
                        <input
                            type="range"
                            min={start}
                            max={end}
                            value={Number(user.cumulativeTotal)}
                            readOnly
                            className="slider"
                        />
                        <div className="need">{message}</div>
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
                                <div>S-Silver</div>
                            </div>
                            <div className="block">
                                <img
                                    className="option"
                                    src={require('../resources/S-VIP.webp')}
                                    alt="img"
                                    onClick={() => handleStatusChange(2)}
                                />
                                <div>S-Gold</div>
                            </div>
                            <div className="block">
                                <img
                                    className="option"
                                    src={require('../resources/vip-card.png')}
                                    alt="img"
                                    onClick={() => handleStatusChange(3)}
                                    style={{ width: '100px', height: '100px' }}
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
                                                Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước đạt từ 0
                                                đến 10.000.000 triệu đồng
                                            </div>
                                        </div>
                                        <div className="condition">Voucher</div>
                                        <div className="condition-content">
                                            <BsFillCartCheckFill className="icon" />
                                            <div className="content">giảm 1% tổng hóa đơn</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {status === 1 && (
                                <div>
                                    <div>
                                        <h1 className="state">S-Silver</h1>
                                        <div className="condition-cont">
                                            <div className="condition">Condition</div>
                                            <div className="condition-content">
                                                <BsFillCartCheckFill className="icon" />
                                                <div className="content">
                                                    Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước đạt
                                                    từ 10.000.000 đến 50.000.000 triệu đồng
                                                </div>
                                            </div>
                                            <div className="condition">Voucher</div>
                                            <div className="condition-content">
                                                <BsFillCartCheckFill className="icon" />
                                                <div className="content">giảm 3% tổng hóa đơn</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {status === 2 && (
                                <div>
                                    <div>
                                        <h1 className="state">S-Gold</h1>
                                        <div className="condition-cont">
                                            <div className="condition">Condition</div>
                                            <div className="condition-content">
                                                <BsFillCartCheckFill className="icon" />
                                                <div className="content">
                                                    Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước đạt
                                                    từ 50.000.000 đến 100.000.000 triệu đồng
                                                </div>
                                            </div>
                                            <div className="condition">Voucher</div>
                                            <div className="condition-content">
                                                <BsFillCartCheckFill className="icon" />
                                                <div className="content">giảm 5% tổng hóa đơn</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {status === 3 && (
                                <div>
                                    <div>
                                        <h1 className="state">S-VIP</h1>
                                        <div className="condition-cont">
                                            <div className="condition">Condition</div>
                                            <div className="condition-content">
                                                <BsFillCartCheckFill className="icon" />
                                                <div className="content">
                                                    Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước đạt
                                                    trên 100.000.000 triệu đồng
                                                </div>
                                            </div>
                                            <div className="condition">Voucher</div>
                                            <div className="condition-content">
                                                <BsFillCartCheckFill className="icon" />
                                                <div className="content">giảm 7% tổng hóa đơn</div>
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
