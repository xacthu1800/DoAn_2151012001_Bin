import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm = () => {
  return (
    <div className="wrapper">
        <form action="" className="form-login">
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaRegUser className="icon"/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <RiLockPasswordLine className="icon"/>
            </div>
            <div className="remember-forgot">
                
            </div>

            <button type="submit">Register</button>
            <div className="register-link">
                <p>Already have account ? <a href="#">Login</a></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm