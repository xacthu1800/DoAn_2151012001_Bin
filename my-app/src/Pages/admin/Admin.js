import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineManageAccounts, MdPassword } from 'react-icons/md';
import { PiMedal, PiLink } from 'react-icons/pi';
import { TbLogout2 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

import Dashboard from './Dashboard';
import Category from './Category';
import Bill from './Bill';
import Product from './Product';
import Voucher from './Voucher';
import { useEffect } from 'react';
import { isLogin_Admin } from '../../utils/localstorage';

const menuItems = [
    { icon: IoHomeOutline, text: 'Dashboard', path: '/Admin/Dashboard' },
    { icon: PiMedal, text: 'Bill', path: '/Admin/Bill' },
    { icon: PiLink, text: 'Product', path: '/Admin/Product' },
    { icon: MdPassword, text: 'Voucher', path: '/Admin/Voucher' },
];

export default function Admin() {
    const navigate = useNavigate();
    const clearLocalStorage = (event) => {
        event.preventDefault();

        localStorage.clear();
        //window.location.reload();
        navigate('/');
    };

    useEffect(() => {
        if (!isLogin_Admin()) {
            navigate('/Login_Admin');
        }
    }, [navigate]);

    return (
        <div className="User-background">
            <div className="section-wrapping">
                <div className="section-left">
                    {menuItems.map(({ icon: Icon, text, path }) => (
                        <div className="section" key={path}>
                            <Icon className="icon" />
                            <Link to={path} className="linkFont">
                                <h3>{text}</h3>
                            </Link>
                        </div>
                    ))}
                    <div className="section" key="Logout">
                        <TbLogout2 className="icon" />
                        <Link to="/" className="linkFont" onClick={clearLocalStorage}>
                            <h3>Logout</h3>
                        </Link>
                    </div>
                </div>
                <div className="section-right">
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="Bill/*" element={<Bill />} />
                        <Route path="Product/*" element={<Product />} />
                        <Route path="Voucher/*" element={<Voucher />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
