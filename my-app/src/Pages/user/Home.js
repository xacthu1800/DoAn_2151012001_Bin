import Product from '../../components/Product';
import React, { useState, useCallback, useEffect } from 'react';
import { isLogin } from '../../utils/localstorage';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import ProductDetail from '../../components/ProductDetail';
import ProductType from '../../components/ProductType';
import Product_User_Homepage from '../../components/Product_User_Homepage';

//Action
import { getProducts as listProducts } from '../../redux/actions/productAction';
import { setUserDeatils } from '../../redux/actions/userAction';

export default function Home({ close, setClose }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
    //console.log(products);

    useEffect(() => {
        if (isLogin()) {
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setUserDeatils());
    }, [dispatch]);
    return (
        <>
            {/* <ProductType productData={products} /> */}
            <Product_User_Homepage products={products} close={close} setClose={setClose} />
            {/* <Product cap="Phone" productType="PHONE" productData={products} close={close} setClose={setClose} />
            <Product cap="Laptop" productType="LAPTOP" productData={products} close={close} setClose={setClose} /> */}
        </>
    );
}
