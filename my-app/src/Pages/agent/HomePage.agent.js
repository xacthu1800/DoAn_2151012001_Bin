import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineManageAccounts, MdPassword } from 'react-icons/md';
import { PiMedal, PiLink } from 'react-icons/pi';
import { TbLogout2 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Bill from './Bill';
import Product from './Product';
import Voucher from './Voucher';

const menuItems = [
    { icon: PiMedal, text: 'Bill', path: '/HomePage_Agent/Bill' },
    { icon: PiLink, text: 'Product', path: '/HomePage_Agent/Product' },
    /* { icon: MdPassword, text: 'Voucher', path: '/HomePage_Agent/Voucher' }, */
];

export default function HomePage_Agent() {
    const navigate = useNavigate();
    const clearLocalStorage = (event) => {
        event.preventDefault();

        localStorage.clear();
        //window.location.reload();
        toast.success('Logout successful');

        navigate('/');
    };
    useEffect(() => {
        if (localStorage.getItem('role') !== 'agent') {
            navigate('/Login_Agent');
        }
    }, []);

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
                        <Route index element={<Bill />} />
                        {/* <Route path="Dashboard" element={<Dashboard />} /> */}
                        <Route path="Bill/*" element={<Bill />} />
                        <Route path="Product/*" element={<Product />} />
                        <Route path="Voucher/*" element={<Voucher />} />
                    </Routes>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}
