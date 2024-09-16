import React, { useState, useCallback } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { RiLockPasswordLine } from 'react-icons/ri';

const LoginForm = () => {
    // const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const _handleSubmit = useCallback(
        async (e) => {
            e.preventDefault(); // Prevent default form submission
            if (userName.length > 2 && password.length > 2) {
                setLoading(true);
                const { statusCode, data } = await Api.postRequest('/api/user/Login', {
                    userName,
                    password,
                });
                if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
                    setLoading(false);
                    alert(data);
                    return;
                }
                alert(data);
                navigate('/'); // Navigate to home page
            }
        },
        [userName, password, navigate],
    );
    return (
        <div className="wrapper">
            <form action="" className="form-login">
                <h1>Login</h1>
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
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#">Forgot Password ?</a>
                </div>

                <button type="submit" onClick={_handleSubmit}>
                    Login
                </button>
                <div className="register-link">
                    <p>
                        Don't have an account ? <Link to="/Register">register</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
