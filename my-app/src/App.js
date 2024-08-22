import React from 'react'

import {  Routes, Route, Link, Switch } from 'react-router-dom';

import  Nav from './components/Nav'
import  Product from './components/Product'
import  Banner from './components/Banner'
import  ProductType from './components/ProductType'
import  Footer from './components/Footer';
import  Home from './components/Pages/Home'
import Login from './components/LoginForm'
import Register from './components/RegisterForm'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
      </Routes>
      
    </>
  )
}

export default App