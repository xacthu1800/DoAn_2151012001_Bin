import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { MdPassword } from 'react-icons/md';
import { PiMedal, PiLink } from 'react-icons/pi';
import { TbLogout2 } from 'react-icons/tb';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './User_HomePage.js';
import YourAccount from './User_YourAccount.js';
import ChangePassword from './User_ChangePassword.js';
import Membershipclass from './User_MembershipoClass.js';
// Import các component trang khác tương ứng nếu có

export default function User() {
    return (
        <>
            <div className="User-background">
                <div className="section-wrapping">
                    {/*  ---------------------------------------Left--------------------------------------------- */}
                    <div className="section-left">
                        <div className="section">
                            <IoHomeOutline className="icon" />
                            <Link to="Homepage" className="linkFont">
                                <h3>Home page</h3>
                            </Link>
                        </div>
                        <div className="section">
                            <MdOutlineManageAccounts className="icon" />
                            <Link to="YourAccount" className="linkFont">
                                <h3>Your account</h3>
                            </Link>
                        </div>
                        <div className="section">
                            <PiMedal className="icon" />
                            <Link to="Membershipclass" className="linkFont">
                                <h3>Membership class</h3>
                            </Link>
                        </div>
                        <div className="section">
                            <PiLink className="icon" />
                            <Link to="Accountlink" className="linkFont">
                                <h3>Account link</h3>
                            </Link>
                        </div>
                        <div className="section">
                            <MdPassword className="icon" />
                            <Link to="Changepassword" className="linkFont">
                                <h3>Change password</h3>
                            </Link>
                        </div>
                        <div className="section">
                            <TbLogout2 className="icon" />
                            <Link to="Logout" className="linkFont">
                                <h3>Logout</h3>
                            </Link>
                        </div>
                    </div>
                    {/*  ---------------------------------------right--------------------------------------------- */}
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
        </>
    );
}
