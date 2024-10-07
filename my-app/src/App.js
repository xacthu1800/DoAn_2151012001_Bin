import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//components
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ChatBot from './components/ChatBot';
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

import Login_Agent from './Pages/agent/agent.login';
import Register_Agent from './Pages/agent/agent.Register';
import HomePage_Agent from './Pages/agent/HomePage.agent';
import ProductDetail_User_Homepage from './components/ProductDetail_User_Homepage';

import { fetchCart } from './redux/actions/cartAction';
import { setUserDeatils } from './redux/actions/userAction';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                    <Route path="product/:id" element={<ProductDetail_User_Homepage />} />
                </Route>
                <Route path="/Login_Admin" element={<Login_Admin />} />
                <Route path="/Admin/*" element={<Admin />} />

                <Route path="/Login_Agent" element={<Login_Agent />} />
                <Route path="/Register_Agent" element={<Register_Agent />} />
                <Route path="/HomePage_Agent/*" element={<HomePage_Agent />} />
            </Routes>
        </>
    );
};

const MainLayout = () => {
    const [chatBot, setChatBot] = useState(false);

    return (
        <>
            <Nav chatBot={chatBot} setChatBot={setChatBot} />
            <ChatBot chatBot={chatBot} setChatBot={setChatBot} />
            <Outlet />
            <Footer />
            <ToastContainer />
        </>
    );
};

export default App;
