import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/SignIn.css';
import TitleBar from "./TitleBar.js";

function SignIn() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Hello, there");
    }

    const handleEmailAddressChange = (event) => {
        setEmailAddress(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <>
            <TitleBar location="landing-page" />
            <div className="row-flex d-flex m-5 p-5 align-items-center justify-content-center bordered h-50">
                <form className="sign-in-form bordered" onSubmit={handleSubmit}>

                    <p className="form-title">Sign into Ashesi CV Builder</p>
                    <div class="form-group d-flex flex-column mb-2">
                        <label htmlFor="login-email-address">Ashesi email address:</label>
                        <input type="text" id="login-email-address" value={emailAddress} onChange={handleEmailAddressChange}></input>
                    </div>
                    <div class="form-group d-flex flex-column">
                        <label>Password:</label>
                        <input type="password" id="login-password" value={password} onChange={handlePasswordChange}></input>
                    </div>
                    <Link to="../dashboard">
                        <input className="button btn btn-lg mt-3" type="submit" value={"Log In"} />
                    </Link>
                </form>
            </div>
        </>
    );
}


export default SignIn;