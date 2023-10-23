import React from "react";
import '../styles/Dashboard.css';
import TitleBar from "./TitleBar";
import CVGroupDisplay from "./CVGroupDisplay";
import { cvData } from "../cv-data";

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
                    <button className="button btn">Create New CV</button>
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