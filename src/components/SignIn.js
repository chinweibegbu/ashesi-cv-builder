import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/SignIn.css';
import TitleBar from "./TitleBar.js";

function SignIn() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:3005/api/users/validate`, {
            email: emailAddress,
            password: password
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                navigate("/dashboard");
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                setError(err.response.data);
                setPassword("");
                // navigate("/signin");
            } else {
                console.log(err);
            }
        });
    }

    return (
        <>
            <TitleBar location="landing-page" />
            <div className="row-flex d-flex m-5 p-5 align-items-center justify-content-center bordered h-50">
                <form className="sign-in-form bordered" onSubmit={handleSubmit}>
                    <p className="form-title">Sign into Ashesi CV Builder</p>
                    <p className="error-message">{error}</p>
                    <div className="form-group d-flex flex-column mb-2">
                        <label htmlFor="login-email-address">Ashesi email address:</label>
                        <input type="text" id="login-email-address" value={emailAddress} onChange={e => setEmailAddress(e.target.value)}></input>
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label>Password:</label>
                        <input type="password" id="login-password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <input className="button btn btn-lg mt-3" type="submit" value="Log In" />
                </form>
            </div>
        </>
    );
}


export default SignIn;