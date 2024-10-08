import { Routes, Route, Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const data = [
    { id: 1, type: 'User' },
    { id: 2, type: 'agent' },
    { id: 3, type: 'User' },
    { id: 4, type: 'User' },
];

export default function UserAccount() {
    return (
        <Routes>
            <Route path="/" element={<UserAccountList />} />
        </Routes>
    );
}
function UserAccountList() {
    const [listUserAccount, setListUserAccount] = useState([]);
    const [state, setState] = useState(true);

    async function fetchAccount() {
        const { statusCode, data } = await Api.getRequest('/api/user/get-all');
        console.log('all account: ', JSON.parse(data).users);
        setListUserAccount(JSON.parse(data).users);
    }

    useEffect(() => {
        fetchAccount();
    }, []);

    return (
        <>
            <div className="bill-cont">
                <div className="title-cont">
                    <div className="title">User - Agent account</div>
                    <div className="state">
                        <select className="list-state" name="type-state">
                            <option value="PEN">User</option>
                            <option value="COM">Agent</option>
                        </select>
                    </div>
                </div>
                <div className="user-account-cont">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th className="user-id">User/Agent ID</th>
                                <th className="user-name">Name</th>
                                <th>Type</th>
                                <th className="user-action">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUserAccount.map((account, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="user-id">{account._id}</td>
                                    <td className="user-name">{account.userName}</td>
                                    <td>{account.role}</td>
                                    <td
                                        className="user-action"
                                        style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}
                                    >
                                        <button className="delete">Delete</button>
                                        {/*  <button className="delete">Edit</button> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
