import React from "react";
import { Link } from "react-router-dom";
import '../styles/LandingPage.css';
import TitleBar from "./TitleBar.js";

function LandingPage() {
    return (
        <>
            <TitleBar location="landing-page" />
            <div className="row-flex d-flex m-5 p-5 align-items-center bordered h-75">
                <div className="col-8 p-5 bordered">
                    <p className="landing-page-text m-0">
                        Build an Ashesi-approved CV with ease
                    </p>
                    <p className="landing-page-subtext mt-1">
                        With a bunch more features and a lot less hassle!
                    </p>
                    <Link to="./signin" className="landing-page-button button btn btn-lg">
                        Log In
                    </Link>
                </div>
                <div className="col-4 d-flex justify-content-center bordered">
                    <img src="images/landing-page-avatar-darker-tone.png" alt="the company logo" />
                </div>
            </div>
        </>
    );
}


export default LandingPage;