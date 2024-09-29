import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function User_HomePage() {
    const [user, setUser] = useState([]);
    const [dataHTML, setDataHTML] = useState([]);
    const userData = useSelector((state) => state.user);
    const navigate = useNavigate();

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
        console.log(dataHTML);
    };

    useEffect(() => {
        if (!userData.userInfo.isLogin) {
            navigate('/');
            return;
        }
        fetchData();
    }, []);
    return (
        <>
            <div className="Homepage">
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
                <div className="section order-spend-wrapping">
                    <div className="sec spend-left">
                        <h2>{user.ordered}</h2>
                        <h4>Ordered</h4>
                    </div>
                    <div className="sec spend-right">
                        <h2>{Number(user.cumulativeTotal).toLocaleString('vi-VN')} Đ</h2>
                        <h4>Cumulative Total</h4>
                    </div>
                </div>
                <div className="section order-history">
                    <div className="oder-wrapping">
                        {dataHTML.map((item, index) => (
                            <div className="oder-item" key={index}>
                                <div className="left-img">
                                    <img src={item.imageUrl} alt="img" />
                                </div>
                                <div className="item-info">
                                    <div className="item-sec name-dateOrder">
                                        <div className="name">{item.name}</div>
                                        <div className="dateOrder">{item.time}</div>
                                    </div>
                                    <div className={`item-sec stateOrder ${item.state.toLowerCase()}`}>
                                        {item.state}
                                    </div>
                                    <div className="item-sec price">{Number(item.price).toLocaleString('vi-VN')} Đ</div>
                                </div>
                                <div className="right-infor"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
