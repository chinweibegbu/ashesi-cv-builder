import React from "react";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css';
import TitleBar from "./TitleBar.js";
import CVGroupDisplay from "./CVGroupDisplay.js";
import { cvData } from "../data/cv-data.js";

function Dashboard({ name }) {
    const CVs = cvData;
    const recentCVs = cvData.slice(0, 4);

    return (
        <>
            <TitleBar location="main-body" />

            <div className="mx-5 my-4">
                {/* Tool Bar */}
                <div className="tool-bar d-flex justify-content-between">
                    <p>Welcome, <span><b>{name}</b></span></p>
                    <Link to="../create-new-cv" className="button btn">Create New CV</Link>
                </div>

                {/* Recent CVs */}
                <CVGroupDisplay subHeadingText="Recently Viewed CVs" allCVDetails={recentCVs} />

                {/* All CVs */}
                <CVGroupDisplay subHeadingText="All CVs" allCVDetails={CVs} />
            </div>
        </>
    );
}


export default Dashboard;