import { MdPassword } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function User_ChangePassword() {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const userData = useSelector((state) => state.user);
    const navigate = useNavigate();

    const user = useSelector((state) => state.user);

    const checkPass = () => {
        if (newPass !== confirmPass) {
            toast.error('Mật khẩu không khớp');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Di chuyển lên đầu để ngăn chặn hành vi mặc định

        if (!checkPass()) return;

        try {
            const response = await fetch(
                `http://localhost:5000/api/user/ChangePassword/${userData.userInfo.details._id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ oldPass, newPass }),
                },
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const { status, message } = await response.json();
            if (status === 'ok') {
                toast.success(message);
            } else {
                toast.error(message);
            }
        } catch (error) {
            toast.error('Có lỗi xảy ra: ' + error.message);
        }
    };

    useEffect(() => {
        if (!user.userInfo.isLogin) {
            navigate('/');
        }
    }, [user]);
    return (
        <>
            <div className="changepassword-cont">
                <div className="infor-cont">
                    <form>
                        <div className="cont-section main-name">
                            <div className="name">
                                <div>Change Password</div>

                                <MdPassword className="icon" />
                            </div>
                        </div>
                        <input
                            className="cont-section"
                            placeholder="Old Pass"
                            name="oldPass"
                            value={oldPass}
                            onChange={(e) => setOldPass(e.target.value)}
                        />
                        <input
                            className="cont-section"
                            placeholder="New Pass"
                            name="newPass"
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                        />
                        <input
                            className="cont-section"
                            placeholder="Pass Confirm"
                            name="confirmPass"
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                        <button type="sudmit" className="update" onClick={handleSubmit}>
                            Update password
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
