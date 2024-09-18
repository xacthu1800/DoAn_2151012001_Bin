import { MdOutlinePhoneIphone } from 'react-icons/md';
import { MdOutlineLaptopMac } from 'react-icons/md';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { BsSmartwatch } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // thư viện chuyển hướng trang kèm dữ liệu

const ProductType = (props) => {
    const { productData } = props;
    const [filterData, setFilterData] = useState(productData);
    const navigate = useNavigate();

    function filterPhone(state) {
        let filtered;
        switch (state) {
            case 'PHONE':
                filtered = productData.filter((product) => product.productType === 'PHONE');
                handleNavigation(filtered);
                break;
            case 'LAPTOP':
                filtered = productData.filter((product) => product.productType === 'LAPTOP');
                handleNavigation(filtered);
                break;
            default:
                filtered = productData;
                break;
        }
        setFilterData(filtered);
    }
    function handleNavigation(data) {
        // Hàm để chuyển hướng
        navigate('/Categories', { state: { data } });
    }
    useEffect(() => {
        setFilterData(productData);
    }, [productData]);
    return (
        <>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="icon_box" onClick={() => filterPhone('PHONE')}>
                            <MdOutlinePhoneIphone className="icon" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box" onClick={() => filterPhone('LAPTOP')}>
                            <MdOutlineLaptopMac className="icon" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box" onClick={() => filterPhone('HEADPHONE')}>
                            <FaHeadphonesAlt className="icon" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box" onClick={() => filterPhone('WATCH')}>
                            <BsSmartwatch className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductType;
