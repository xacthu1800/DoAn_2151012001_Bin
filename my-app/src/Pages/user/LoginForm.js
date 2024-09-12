import React, { useState, useCallback } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { RiLockPasswordLine } from 'react-icons/ri';

const LoginForm = () => {
    // const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const _handleSubmit = useCallback(async () => {
        if (userName.length > 2 && password.length > 2) {
            setLoading(true);
            const { statusCode, data } = await Api.postRequest('/api/user/signup', {
                userName,
                password,
            });
            if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
                setLoading(false);
                alert(data);
                return;
            }
            alert(data);
            navigate('/signin', { replace: true });
        }
    }, [userName, password, navigate]);
    return (
        <div className="wrapper">
            <form action="" className="form-login">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
                    <FaRegUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                        Don't have an account ? <a href="#">register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
