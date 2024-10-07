import Caption from './Caption';
import { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Product_User_Homepage = (props) => {
    return (
        <div>
            <div className="product_User_Homepage-wrapper">
                <div className="Product_User_Homepage-grid-container">
                    {testData.map((item, index) => (
                        <Link to={`/product/${item.id}`} key={index}>
                            <div className="grid-item" key={index}>
                                <img src={item.image} alt={item.product} />
                                <h2>{item.product}</h2>
                                <p>Price: {item.price} VND</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const testData = [
    {
        id: 1,
        product: 'product1 asdf asdfas dfasd asdfasdf asdfas asdf asd',
        price: 100,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 2,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 3,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 4,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 5,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 6,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 7,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 8,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 9,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 10,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 11,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 12,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 13,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 14,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 15,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 16,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 17,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 18,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 19,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 20,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 21,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 22,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
    {
        id: 23,
        product: 'product2',
        price: 200,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
    },
];

export default Product_User_Homepage;
