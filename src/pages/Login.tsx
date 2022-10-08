import React,{useRef, useState} from 'react'
import logo from '../assets/Union.svg'
import logoName from '../assets/lendsqr.svg'
import { ReactComponent as LoginGraphic } from "../assets/pablo-sign-in 1.svg"
import '../styles/Login.scss'

const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    const emailRef = useRef(null)
    
    const handlePasswordChange =(event: React.ChangeEvent<HTMLInputElement> )=>{
        event.preventDefault();
        setPasswordInput(event.target.value);
    }
    const togglePassword =(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }

    return (
        <div className='login_body'>
            <div className="logo_container">
                <img src={logo} alt="" className="logo" />
                <img src={logoName} alt="" className="logo_name" />
            </div>
            <section className="login_left">
                <div className="login_graphic">
                    <LoginGraphic />
                </div>
            </section>
            <section className="login-right">
                <div className="login-right_content">
                    <h3 className="title">welcome!</h3>
                    <p className="details">
                        enter details to login
                    </p>
                    <form className="form-container">
                        <div className="form-container_inputBox">
                            <div className="single_input">
                                <input type="email" placeholder='Email' className="input_item" />
                            </div>
                            <div className="single_input password">
                                <input type={passwordType} placeholder='Password' value={passwordInput} className="input_item" id='password_field' ref={emailRef} onChange={handlePasswordChange}/>
                                <button className="show" onClick={togglePassword}>show</button>
                            </div>
                        </div>
                        <p className="form-container_forgotPasswordText">
                            forgot password?
                        </p>
                        <button className="form-container_loginBtn">log in</button>

                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login