import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//components
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
//pages
import Products from './Pages/user/Products';
import Home from './Pages/user/Home';
import Login from './Pages/user/LoginForm';
import Register from './Pages/user/RegisterForm';
import Cart from './Pages/user/Page.Cart';
import Checkout from './Pages/user/Page.checkout';
import User from './Pages/user/Page.User';
import Admin from './Pages/admin/Page.Admin';
import Login_Admin from './Pages/admin/Login_Admin';

import { fetchCart } from './redux/actions/cartAction';
import { setUserDeatils } from './redux/actions/userAction';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCart());
        dispatch(setUserDeatils());
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="Categories" element={<Products />} />
                    <Route path="Cart" element={<Cart />} />
                    <Route path="Checkout" element={<Checkout />} />
                    <Route path="User/*" element={<User />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Register" element={<Register />} />
                </Route>
                <Route path="/Login_Admin" element={<Login_Admin />} />
                <Route path="/Admin/*" element={<Admin />} />
            </Routes>
        </>
    );
};

const MainLayout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
