import React, { useState, useCallback, useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { setToken, isLogin } from '../../utils/localstorage';
import { RiLockPasswordLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginForm = () => {
    // const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [alertShown, setAlertShown] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isLogin()) {
            /* alert('you have Logged in');
            console.log('logged');
            setAlertShown(true); */
            navigate('/'); // Nếu đã đăng nhập, điều hướng đến trang chính
        }
    }, [navigate]);

    const handleSudmit = (e) => {
        e.preventDefault();
    };

    const onSuccess = async (res) => {
        console.log('Login Success: ' + JSON.stringify(res));
        console.log('credential: ' + res.credential);
        try {
            const { statusCode, data } = await Api.postRequest('/api/user/LoginWithGoogle', {
                tokenId: res.credential,
            });
            if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
                setLoading(false);
                toast.error('Fail to login with Google');
                return;
            }

            console.log(data);
            const { status, token } = JSON.parse(data);
            if (status != 'ok') {
                toast.error('Fail to login');
                return;
            } else {
                toast.success('Login successfully');
                setToken(token);
                navigate('/'); // Navigate to home page
            }
        } catch (error) {
            toast.error('Fail to login');
        }
    };

    const onFailure = (res) => {
        console.log('Login Failed: ' + res);
    };

    const _handleSubmit = useCallback(
        async (e) => {
            e.preventDefault(); // Prevent default form submission
            if (userName.length > 2 && password.length > 2) {
                setLoading(true);
                const { statusCode, data } = await Api.postRequest('/api/user/Login', {
                    userName,
                    password,
                    role: 'user',
                });
                const { status, token } = JSON.parse(data);

                if (statusCode === 200) {
                    toast.success('Login successfully');
                    setToken(token);
                    localStorage.setItem('role', 'user');
                    navigate('/'); // Navigate to home page
                } else {
                    setLoading(false);
                    toast.error('Fail to login');
                    return;
                }

                console.log(data);
                if (status != 'ok') {
                    toast.error('user name or password is wrong');
                    return;
                } else {
                    toast.success('Login successfully');
                    setToken(token);
                    navigate('/'); // Navigate to home page
                }
            }
        },
        [userName, password, navigate],
    );
    return (
        <div className="wrapper">
            <form action="" className="form-login" onSubmit={handleSudmit}>
                <h1>User Login</h1>
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
                <div className="google-btn">
                    <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} shape="circle" text="Login with Google" />
                </div>

                <button type="submit" onClick={_handleSubmit} className="loginPage-Login-button">
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
