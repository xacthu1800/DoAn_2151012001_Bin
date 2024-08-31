import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineManageAccounts, MdPassword } from 'react-icons/md';
import { PiMedal, PiLink } from 'react-icons/pi';
import { TbLogout2 } from 'react-icons/tb';

import HomePage from './User_HomePage.js';
import YourAccount from './User_YourAccount.js';
import ChangePassword from './User_ChangePassword.js';
import Membershipclass from './User_MembershipoClass.js';

const menuItems = [
    { icon: IoHomeOutline, text: 'Home page', path: 'Homepage' },
    { icon: MdOutlineManageAccounts, text: 'Your account', path: 'YourAccount' },
    { icon: PiMedal, text: 'Membership class', path: 'Membershipclass' },
    { icon: PiLink, text: 'Account link', path: 'Accountlink' },
    { icon: MdPassword, text: 'Change password', path: 'Changepassword' },
    { icon: TbLogout2, text: 'Logout', path: 'Logout' },
];

export default function User() {
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
                        <Route index element={<HomePage />} />
                        <Route path="Homepage" element={<HomePage />} />
                        <Route path="YourAccount" element={<YourAccount />} />
                        <Route path="Changepassword" element={<ChangePassword />} />
                        <Route path="Membershipclass" element={<Membershipclass />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
