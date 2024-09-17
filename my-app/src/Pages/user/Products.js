import Categories from '../../components/Categories';
import React, { useState, useCallback, useEffect } from 'react';
import { getToken } from '../../utils/localstorage';

export default function Products({ close, setClose }) {
    const [hasLogged, setHasLogged] = useState(false);
    useEffect(() => {
        localStorage.clear();
        setHasLogged(true);
    }, [hasLogged]);
    return (
        <>
            <Categories close={close} setClose={setClose} />
        </>
    );
}
