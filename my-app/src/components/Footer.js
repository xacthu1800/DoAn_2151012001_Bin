import ouIcon from '../resources/Logo-DH-Mo-TPHCM-OU-V.webp';

export default function Footer() {
    return (
        <>
            <div className="foot-container hidden-on-mobile">
                <div className="container-item col-shadow">
                    <h1>CellphoneB</h1>
                    <h4>Website bán lẻ điện thoại, laptop, tai nghe, đồng hồ thông minh</h4>
                </div>
                <div className="container-item col-shadow">
                    <img src={ouIcon} />
                    <h5>Đồ Án Ngành Khoa Học Máy Tính</h5>
                </div>
                <div className="container-item  ">
                    <h3 className="info-student">Sinh Viên - Nguyễn Văn Bin</h3>
                    <h3 className="info-student info-student-container">Mã Số - 2151012001</h3>
                </div>
            </div>
        </>
    );
}
