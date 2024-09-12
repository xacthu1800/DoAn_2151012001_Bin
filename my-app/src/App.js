import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useState } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Products from './Pages/user/Products';
import Home from './Pages/user/Home';
import Login from './Pages/user/LoginForm';
import Register from './Pages/user/RegisterForm';
import ProductDetail from './components/ProductDetail';
import Cart from './Pages/user/Page.Cart';
import Checkout from './Pages/user/Page.checkout';
import User from './Pages/user/Page.User';
import Admin from './Pages/admin/Page.Admin';

const App = () => {
    /* Nav */
    const [inputValue, setInput] = useState('');
    /* Checkout */
    const [coupon, setCoupon] = useState('');
    const [product, setProduct] = useState('');
    const [close, setClose] = useState(false);

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout close={close} setClose={setClose} />}>
                    <Route index element={<Home close={close} setClose={setClose} />} />
                    <Route path="Categories" element={<Products close={close} setClose={setClose} />} />
                    <Route path="Cart" element={<Cart />} />
                    <Route path="Checkout" element={<Checkout />} />
                    <Route path="Admin" element={<Admin />} />
                    <Route path="User/*" element={<User />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Register" element={<Register />} />
                </Route>
                <Route path="/Admin/*" element={<Admin />}>
                    <Route index element={<Admin />} />
                </Route>
            </Routes>
        </>
    );
};

const MainLayout = ({ close, setClose }) => {
    return (
        <>
            <Nav />
            <ProductDetail close={close} setClose={setClose} />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
