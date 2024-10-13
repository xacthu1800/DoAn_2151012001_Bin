import { useEffect, useState, useParams } from 'react';
import { Api } from '../utils/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CallbackCheckout = () => {
    const navigate = useNavigate();
    const userFullname = localStorage.getItem('userFullname');
    const userAddress = localStorage.getItem('userAddress');
    const userPhoneNumber = localStorage.getItem('userPhoneNumber');
    const userNote = localStorage.getItem('userNote');
    const paymentMethod = localStorage.getItem('userPayment');
    const discount = localStorage.getItem('discount');
    const shipping = localStorage.getItem('shipping');
    const sumPrice = localStorage.getItem('sumPrice');
    const state = localStorage.getItem('state');
    const voucher = localStorage.getItem('voucher');

    const transid = localStorage.getItem('transid');

    async function handleCallbackCheckout() {
        const { statusCode, data } = await Api.postRequest(`/api/create-payment-zalo/order-status/${transid}`);
        console.log('userFullname: ' + userFullname);
        console.log('userAddress: ' + userAddress);
        console.log('userPhoneNumber: ' + userPhoneNumber);
        console.log('userNote: ' + userNote);
        console.log('paymentMethod: ' + paymentMethod);
        console.log('discount: ' + discount);
        console.log('shipping: ' + shipping);
        console.log('sumPrice: ' + sumPrice);
        console.log('state: ' + state);
        console.log('voucher: ' + voucher);
        console.log('statusCode: ' + statusCode);
        console.log('data: ' + data);
        const returncode = JSON.parse(data).result.returncode;
        console.log('returncode: ' + returncode);
        if (returncode == 1) {
            navigate('/', { replace: true });
            toast.success('order successfully');
        } else {
            navigate('/', { replace: true });
            toast.error('order failed');
        }
    }

    useEffect(() => {
        handleCallbackCheckout();
    }, []);

    return <div className="bin">CallbackCheckout</div>;
};

export default CallbackCheckout;
