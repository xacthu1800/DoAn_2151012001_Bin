export const token_key = 'E_COMMERCE_TOKEN';
export const setToken = (token) => {
    window.localStorage.setItem(token_key, token);
};

export const token_key_Admin = 'E_COMMERCE_TOKEN_ADMIN';
export const setToken_Admin = (token) => {
    window.localStorage.setItem(token_key_Admin, token);
};

export const getToken = () => {
    let token = window.localStorage.getItem(token_key);
    if (!!token) return token;
    return false;
};

export const getToken_Admin = () => {
    let token = window.localStorage.getItem(token_key_Admin);
    if (!!token) return token;
    return false;
};

export const isLogin = () => {
    if (!!getToken()) {
        return true;
    }
    return false;
};

export const isLogin_Admin = () => {
    if (!!getToken_Admin()) {
        return true;
    }
    return false;
};

export const logout = () => {
    window.localStorage.clear();
};

export const logout_Admin = () => {
    window.localStorage.clear();
};
