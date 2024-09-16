import React, { useState, useCallback } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Api } from '../../utils/Api';

const LoginForm = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const _handleSubmit = useCallback(
        async (e) => {
            e.preventDefault(); // Prevent default form submission

            if (userName.length > 2 && password.length > 2) {
                setLoading(true);
                const { statusCode, data } = await Api.postRequest('/api/user/Register', {
                    userName,
                    password,
                });
                if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
                    setLoading(false);
                    alert(data);
                    return;
                }
                alert(data);
                navigate('/Login', { replace: true });
            }
        },
        [userName, password, navigate],
    );

    return (
        <div className="wrapper">
            <form action="" className="form-login">
                <h1>Register</h1>
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
                <div className="remember-forgot"></div>

                <button type="submit" onClick={_handleSubmit}>
                    Register
                </button>
                <div className="register-link">
                    <p>
                        Already have account ? <Link to="/Login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
