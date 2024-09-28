import React, { useState, useCallback, useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { setToken_Admin, isLogin_Admin } from '../../utils/localstorage';
import { RiLockPasswordLine } from 'react-icons/ri';
import AdminPage from './Admin';

const LoginForm = () => {
    // const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [alertShown, setAlertShown] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {}, [loading]);

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();

            if (userName.length > 2 && password.length > 2) {
                setLoading(true);
                const { statusCode, data } = await Api.postRequest('/api/admin/Login', {
                    userName,
                    password,
                });
                if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
                    setLoading(false);
                    alert(data);
                    return;
                }

                console.log(data);
                const { status, message, token } = JSON.parse(data);
                if (status === 'success') {
                    setToken_Admin(token);
                    console.log(isLogin_Admin());
                    setLoading(false);
                    navigate('/Admin'); // Đảm bảo đường dẫn chính xác
                }
            }
        },
        [userName, password, navigate],
    );
    return (
        <div className="wrapper">
            <form action="" className="form-login" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Admin</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        value={userName}
                        name="userName"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <FaRegUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        name="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <RiLockPasswordLine className="icon" />
                </div>
                {/* <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#">Forgot Password ?</a>
                </div> */}

                <button type="submit" className="loginPage-Login-button">
                    Login
                </button>
                <div className="register-link"></div>
            </form>
        </div>
    );
};

export default LoginForm;
