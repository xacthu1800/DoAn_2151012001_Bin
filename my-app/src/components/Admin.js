import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineManageAccounts, MdPassword } from 'react-icons/md';
import { PiMedal, PiLink } from 'react-icons/pi';
import { TbLogout2 } from 'react-icons/tb';

import Dashboard from './Pages/admin/Dashboard';
import Category from './Pages/admin/Category';
import Bill from './Pages/admin/Bill';
import Product from './Pages/admin/Product';
import Voucher from './Pages/admin/Voucher';
import Product_Add from './Pages/admin/Product_Add';

const menuItems = [
    { icon: IoHomeOutline, text: 'Dashboard', path: '/Admin/Dashboard' },
    { icon: MdOutlineManageAccounts, text: 'Category', path: '/Admin/Category' },
    { icon: PiMedal, text: 'Bill', path: '/Admin/Bill' },
    { icon: PiLink, text: 'Product', path: '/Admin/Product' },
    { icon: MdPassword, text: 'Voucher', path: '/Admin/Voucher' },
    { icon: TbLogout2, text: 'Logout', path: '' },
];

export default function Admin() {
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
                </div>
                <div className="section-right">
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="Category" element={<Category />} />
                        <Route path="Bill/*" element={<Bill />} />
                        <Route path="Product/*" element={<Product />} />
                        <Route path="Voucher" element={<Voucher />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
