import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/SignUp.css';
import TitleBar from "./TitleBar.js";

function SignUp() {
    const [emailAddress, setEmailAddress] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check that inputs are all filled
        if ((emailAddress === "")
            || (fullName === "")
            || (password === "")
            || (confirmPassword === "")) {
            setError("ERROR: All fields are not filled");
        } else {
            await axios.post(`${process.env.REACT_APP_API_LINK}/users`, {
                full_name: fullName,
                email: emailAddress,
                password: password
            }).then((response) => {
                navigate(-1);
            }).catch((err) => {
                if (err.response.status === 409) {
                    setError(err.response.data);
                } else {
                    console.log(typeof err.response.status);
                    console.log(err.response.status);
                }
            });
        }
    }

    return (
        <>
            <TitleBar location="landing-page" />
            <div className="row-flex d-flex m-5 p-5 align-items-center justify-content-center bordered h-50">
                <form className="sign-up-form bordered" onSubmit={handleSubmit}>
                    <p className="form-title">Sign Up </p>
                    <p className="error-message">{error}</p>
                    <div className="form-group d-flex flex-column mb-2">
                        <label htmlFor="signup-email-address">Ashesi email address:</label>
                        <input type="text" id="signup-email-address" value={emailAddress} onChange={e => setEmailAddress(e.target.value)}></input>
                    </div>
                    <div className="form-group d-flex flex-column mb-2">
                        <label htmlFor="signup-full-name">Full name:</label>
                        <input type="text" id="signup-full-name" value={fullName} onChange={e => setFullName(e.target.value)}></input>
                    </div>
                    <div className="form-group d-flex flex-column mb-2">
                        <label htmlFor="signup-password">Password:</label>
                        <input type="password" id="signup-password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label htmlFor="signup-password-confirm">Confirm password:</label>
                        <input type="password" id="signup-password-confirm" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
                    </div>
                    <p className="error-message">
                        {(password !== confirmPassword) ? "Passwords entered do not match" : ""}
                    </p>
                    <input className="button btn btn-lg mt-3" type="submit" value="Sign Up" />
                    <p className="text-center">
                        Already have an account? Sign in
                        <span className="link-text" onClick={() => navigate("/signin")}>here</span>
                    </p>
                </form>
            </div>
        </>
    );
}


export default SignUp;