import React, { useState, useCallback } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginForm = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onSuccess = async (res) => {
        console.log('Login Success: ' + JSON.stringify(res));
        console.log('credential: ' + res.credential);
        try {
            const { statusCode, data } = await Api.postRequest('/api/user/RegisterWithGoogle', {
                tokenId: res.credential,
            });
            if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
                setLoading(false);
                toast.error('Fail to register with Google');
                return;
            }

            console.log(data);
            const { status } = JSON.parse(data);
            if (status != 'ok') {
                toast.error('Fail to register');
                return;
            } else {
                toast.success('Register successfully');
                navigate('/Login', { replace: true });
            }
        } catch (error) {
            toast.error('Fail to register');
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
                const { statusCode, data } = await Api.postRequest('/api/user/Register', {
                    userName,
                    password,
                    role: 'user',
                });
                if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
                    setLoading(false);
                    toast.error('Fail to register');
                    return;
                }
                toast.success('Register successfully');
                navigate('/Login', { replace: true });
            }
        },
        [userName, password, navigate],
    );

    return (
        <div className="wrapper">
            <form action="" className="form-login">
                <h1>User Register</h1>
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
                    <GoogleLogin
                        clientId={clientId}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        shape="circle"
                        text="Register with Google"
                    />
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
