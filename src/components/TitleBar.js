import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TitleBar.css';

function TitleBar({ location }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }

    if (location === "landing-page") {
        return (
            <div className="row-flex d-flex title-bar-landing p-2 bordered">
                <img className='logo-img' src="images/ashesi-logo-black.png" alt="Ashesi University Logo" />
                <p className='logo-txt'>Ashesi CV Builder</p>
            </div>
        );
    } else if (location === "main-body") {
        return (
            <div className="row-flex d-flex title-bar-main align-items-center justify-content-between bordered">
                <div className="row-flex d-flex align-items-center">
                    <img className='logo-img' src="images/ashesi-logo-white.png" alt="Ashesi University Logo" />
                    <p className='logo-txt text-white'>Ashesi CV Builder</p>
                </div>
                <div>
                    <p className='logout-link m-auto text-white text-decoration-underline' onClick={handleLogout}>Log out</p>
                </div>
            </div>
        );
    }
}

export default TitleBar;