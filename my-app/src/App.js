import React from 'react'
import {BrowserRouter} from 'react' 
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import  Product from './components/Product'
import  Banner from './components/Banner'
import  ProductType from './components/ProductType'
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Nav />

      <ProductType />
      <Product />

      <Footer />
    </ Router>
  
  )
}

export default App