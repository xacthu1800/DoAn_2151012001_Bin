import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm = () => {
  return (
    <div className="wrapper">
        <form action="" className="form-login">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaRegUser className="icon"/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <RiLockPasswordLine className="icon"/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password ?</a>
            </div>

            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account ? <a href="#">register</a></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm