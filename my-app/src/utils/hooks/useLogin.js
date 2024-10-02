import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Api } from '../Api';
import { logout } from '../localstorage';
import { toast } from 'react-toastify';
function useLogin() {
    const navigate = useNavigate(); // Changed from { replace } to navigate
    const [loginInfo, setLoginInfo] = useState({
        loading: true,
        isLogin: false,
    });
    const checkLogin = useCallback(async () => {
        const { statusCode, data } = await Api.getRequest(`/api/user/me`);
        if (statusCode === 400 || statusCode === 500) {
            navigate('/', { replace: true }); // Updated to use navigate with replace option
            logout();
            toast.error('You need to first login !!!');

            return;
        }
        setLoginInfo({ loading: false, isLogin: true });
    }, [navigate]); // Updated dependency array
    useEffect(() => {
        checkLogin();
    }, [checkLogin]);
    return { loginInfo };
}

export default useLogin;
