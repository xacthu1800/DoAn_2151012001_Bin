import { SiDuolingo } from 'react-icons/si';

export default function User_Youraccount() {
    return (
        <>
            <div className="YourAccount">
                <div className="infor-cont">
                    <form>
                        <div className="cont-section main-name">
                            <div className="name">
                                <div>Nguyen Van Bin</div>

                                <SiDuolingo className="icon" />
                            </div>
                        </div>
                        <input className="cont-section" placeholder="Nguyen Van Bin" value={'Nguyen Van Bin'} />
                        <input
                            className="cont-section"
                            placeholder="Email: 2151012001bin@ou.edu.vn"
                            value={'2151012001bin@ou.edu.vn'}
                        />
                        <input className="cont-section" placeholder="Mail" value={'male'} />
                        <input className="cont-section" placeholder="Phone: 0932960437" value={'0932960437'} />
                        <input
                            className="cont-section"
                            placeholder="Culmulative Total: 30.000.000 Đ"
                            value={'30.000.000 Đ'}
                        />
                        <input className="cont-section" placeholder="Address: 56B TPHCM" value={' 56B TPHCM'} />
                        <button type="sudmit" className="update">
                            Update inofrmation
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
