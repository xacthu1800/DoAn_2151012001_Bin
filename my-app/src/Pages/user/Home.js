import ProductType from '../../components/ProductType';
import Product from '../../components/Product';
import React, { useState, useCallback, useEffect } from 'react';
import { isLogin } from '../../utils/localstorage';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
        dispatch(listProducts());
    }, [dispatch]);

    useEffect(() => {
        if (isLogin()) {
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        dispatch(setUserDeatils());
    }, [dispatch]);
    return (
        <>
            <ProductType />
            <Product cap="Phone" productData={products} close={close} setClose={setClose} />
        </>
    );
}
