export default function User_HomePage() {
    return (
        <>
            <div className="Homepage">
                <div className="section user-infor">
                    <div>
                        <h1>Nguyen Van Bin</h1>
                        <h3>0932960437</h3>
                    </div>
                    <div className="rank">Snew</div>
                </div>
                <div className="section order-spend-wrapping">
                    <div className="sec spend-left">
                        <h2>17</h2>
                        <h4>Ordered</h4>
                    </div>
                    <div className="sec spend-right">
                        <h2>6M</h2>
                        <h4>Cumulative Total</h4>
                    </div>
                </div>
                <div className="section order-history">
                    <div className="oder-wrapping">
                        <div className="oder-item">
                            <div className="left-img">
                                <img src={require('../resources/Phone/iphone-15-plus_1__1.webp')} alt="img" />
                            </div>
                            <div className="item-info">
                                <div className="item-sec name-dateOrder">
                                    <div className="name">Iphone 15</div>
                                    <div className="dateOrder">20/8/2024 14:38</div>
                                </div>
                                <div className="item-sec stateOrder">Delivered</div>
                                <div className="item-sec price">20.000.000 Đ</div>
                            </div>
                            <div className="right-infor"></div>
                        </div>
                        <div className="oder-item">
                            <div className="left-img">
                                <img src={require('../resources/Phone/iphone-15-plus_1__1.webp')} alt="img" />
                            </div>
                            <div className="item-info">
                                <div className="item-sec name-dateOrder">
                                    <div className="name">Iphone 15</div>
                                    <div className="dateOrder">20/8/2024 14:38</div>
                                </div>
                                <div className="item-sec stateOrder">Delivered</div>
                                <div className="item-sec price">20.000.000 Đ</div>
                            </div>
                            <div className="right-infor"></div>
                        </div>
                        <div className="oder-item">
                            <div className="left-img">
                                <img src={require('../resources/Phone/iphone-15-plus_1__1.webp')} alt="img" />
                            </div>
                            <div className="item-info">
                                <div className="item-sec name-dateOrder">
                                    <div className="name">Iphone 15</div>
                                    <div className="dateOrder">20/8/2024 14:38</div>
                                </div>
                                <div className="item-sec stateOrder">Delivered</div>
                                <div className="item-sec price">20.000.000 Đ</div>
                            </div>
                            <div className="right-infor"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
