import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


import App from './App';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'
import NewProduct from './components/NewProduct'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
   <NewProduct />
  </React.StrictMode>
);



