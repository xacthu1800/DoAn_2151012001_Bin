import React from 'react'

import {  Routes, Route, Link, Switch } from 'react-router-dom';
import {useState} from 'react'

import  Nav from './components/Nav'
import  Footer from './components/Footer';
import  Products from './components/Pages/Products'
import  Home from './components/Pages/Home'
import  Login from './components/Pages/LoginForm'
import  Register from './components/Pages/RegisterForm'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Pages/Page.Cart'



const App = () => {
  const [inputValue, setInput] = useState('');
  const [product,setProduct] = useState('')
  const [close,setClose] = useState(false)

  return (
    <>
      <Nav inputValue={inputValue} setInput={setInput}/>
      <ProductDetail 
        product={product} setProduct={setProduct}
        close={close} setClose={setClose}
        />
        
      <Routes>
        <Route path='/' element={<Home 
            close={close} setClose={setClose}
          />}/>
        <Route path='/Categories' element={<Products 
            close={close} setClose={setClose}
          />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App