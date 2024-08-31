import { CiSearch } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { FaRegCircleUser } from 'react-icons/fa6';

const Nav = (props) => {
    return (
        <>
            <nav className="nav">
                <Link to="/Admin" className="site-title">
                    CellphoneB
                </Link>
                <div className="search-box">
                    <CiSearch className="button" />
                    <input
                        type="text"
                        value={props.inputValue}
                        placeholder="Enter The Product Name"
                        onChange={(e) => props.setInput(e.target.value)}
                    />
                </div>
                <ul>
                    <li>
                        <div style={{ display: 'none' }}>Hi Bin</div>
                    </li>
                    <li className="nav-right-cont">
                        <Link to="/User">
                            <FaRegCircleUser size={35} className="userIcon" />
                        </Link>
                        <Link to="/Cart">
                            <FiShoppingCart size={35} className="cartIcon" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="header">
                <div className="container">
                    <div className="nav-below">
                        <ul>
                            <li>
                                <Link to="/" className="link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/Categories" className="link">
                                    Category
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="auth">
                            <Link to="/Login">
                                <CiLogin size={35} className="icon" />
                            </Link>
                            <Link to="/Register">
                                <CiLogout size={35} className="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
