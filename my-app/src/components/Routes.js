import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import ProductDetail from './ProductDetail';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Nav inputValue={inputValue} setInput={setInput} />
            <ProductDetail product={product} setProduct={setProduct} close={close} setClose={setClose} />

            <Routes>
                <Route path="/" element={<Nav />} />
                <Route path="/" element={<Nav />} />
                <Route path="/" element={<Nav />} />
                <Route path="/" element={<Nav />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
