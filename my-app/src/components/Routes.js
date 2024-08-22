import React from 'react'

import {  Routes, Route } from 'react-router-dom';

import Nav from './components/Nav'
import  Product from './components/Product'
import  Banner from './components/Banner'
import  ProductType from './components/ProductType'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Nav />}/> 
        <Route path='/' element={<Nav />}/> 
        <Route path='/' element={<Nav />}/> 
        <Route path='/' element={<Nav />}/> 
       </Routes>    
    </>
  )
}

export default App