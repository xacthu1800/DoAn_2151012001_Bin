import Categories from '../../components/Categories';
import React, { useState, useCallback, useEffect } from 'react';
import { getToken } from '../../utils/localstorage';
import { useDispatch, useSelector } from 'react-redux';

//Action
import { getProducts as listProducts } from '../../redux/actions/productAction';

export default function Products({ close, setClose }) {
    const [hasLogged, setHasLogged] = useState(false);
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
    /*  console.log('product in Poduct.js');
    console.log(products); */

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    /*  useEffect(() => {
        localStorage.clear();
        setHasLogged(true);
    }, [hasLogged]); */
    return (
        <>
            <Categories productData={products} close={close} setClose={setClose} />
        </>
    );
}
