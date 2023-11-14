import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import '../styles/Dashboard.css';
import TitleBar from "./TitleBar.js";
import CVGroupDisplay from "./CVGroupDisplay.js";

function Dashboard() {
    const [CVs, setCVs] = useState([]);
    const recentCVs = CVs.slice(0, 4);

    const [isLoading, setIsLoading] = useState(true);

    const { state } = useLocation();
    const { user_id, full_name } = state;

    useEffect(() => {

        const getUsersCVs = async () => {
            await axios.get(`https://ashesi-cv-builder.onrender.com/api/${user_id}/cv`)
                .then((response) => {
                    setCVs(response.data);
                    setIsLoading(false);
                }).catch((err) => {
                    console.log(err);
                });
        }

        getUsersCVs();

    }, []);

    return (
        <>
            <TitleBar location="main-body" />

            <div className="mx-5 my-4">
                {/* Tool Bar */}
                <div className="tool-bar d-flex justify-content-between">
                    <p>Welcome, <span><b>{full_name}</b></span></p>
                    <Link
                        to="../create-new-cv"
                        state={{ 
                            user_id: user_id,
                            full_name: full_name
                        }}
                        className="button btn">
                        Create New CV</Link>
                </div>
                {/* Recent CVs */}
                <CVGroupDisplay user_id={user_id} full_name={full_name} isLoading={isLoading} subHeadingText="Recently Viewed CVs" allCVDetails={recentCVs} />

                {/* All CVs */}
                <CVGroupDisplay user_id={user_id} full_name={full_name} isLoading={isLoading} subHeadingText="All CVs" allCVDetails={CVs} />
            </div>
        </>
    );
}


export default Dashboard;