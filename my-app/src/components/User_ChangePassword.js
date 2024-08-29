import { MdPassword } from 'react-icons/md';

export default function User_ChangePassword() {
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
                        <input className="cont-section" placeholder="Old Pass" name="oldPass" />
                        <input className="cont-section" placeholder="New Pass" name="newPass" />
                        <input className="cont-section" placeholder="Pass Confirm" />
                        <button type="sudmit" className="update">
                            Update password
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
