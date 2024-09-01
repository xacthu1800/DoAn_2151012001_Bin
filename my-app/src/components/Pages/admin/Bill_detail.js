import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Bill_detail() {
    const { id } = useParams();
    const [billData, setBillData] = useState(null);

    useEffect(() => {
        // Fetch bill data here (replace with actual API call)
        // For now, we'll just set some dummy data
        setBillData({ id: id, amount: 100, date: '2023-04-15' });
    }, [id]);

    if (!billData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Bill Detail</h1>
            <p>Bill ID: {billData.id}</p>
            <p>Amount: ${billData.amount}</p>
            <p>Date: {billData.date}</p>
        </div>
    );
}
