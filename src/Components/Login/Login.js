import React from "react";
import './Login.css';
import chatlogo from '../Images/chatlogo.png';

export default function Login() {
    return (
        <div className="Login-container">
            <div className="login-left-container">
                <div className="login-left-container-para">
                    <p>NETWORKING HAS NEVER BEEN EASIER</p>
                </div>
            </div>

            <div className="login-right-container">
                <div className="login-form-container">
                    <img src={chatlogo} alt="load error" />
                    <form>
                        <div className="form-input-div"><i class="fa-sharp fa-solid fa-file-signature"></i><input type='text' placeholder="Full Name (required if registering)" /></div>
                        <div className="form-input-div"><i class="fa-solid fa-upload"></i><input type='text' placeholder="Profile Pic Url (optional)" /></div>
                        <div className="form-input-div"><i class="fa-sharp fa-solid fa-envelope"></i><input type='email' placeholder="Email" /></div>
                        <div className="form-input-div"><i class="fa-sharp fa-solid fa-key"></i><input type='password' placeholder="Password" /></div>
                        <div className="form-input-div"><i class="fa-solid fa-right-to-bracket"></i><button>Sign In</button></div>
                    </form>
                    <h3 className="guest_option">Guest Login</h3>
                    <p>Not a member? <span className="register_option">Register now</span></p>
                </div>
            </div>
        </div>
    );
}