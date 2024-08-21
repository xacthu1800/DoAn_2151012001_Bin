import React from 'react'
import {BrowserRouter} from 'react' 
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  NewProduct from './components/NewProduct'

const App = () => {
  return (
    <Router>
      <Nav />
      <NewProduct />
      <NewProduct />
      <NewProduct />
    </ Router>
  )
}

export default App