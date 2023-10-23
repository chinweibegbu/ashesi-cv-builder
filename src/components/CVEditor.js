import React from "react";
import '../styles/CVEditor.css';
import TitleBar from './TitleBar';

function CVEditor({ cvName }) {
    return (
        <>
            <TitleBar location="main-body" />
            <div className="cv-editor row bordered">
                <div className="cv-editor-details px-5 pb-2 col-xl-6 bordered">
                    <p className="title text-center mt-3">{cvName}</p>
                    <div class="accordion" id="detail-sections">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="PersonalDetails">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#PD-section" aria-expanded="true" aria-controls="PD-section">
                                    Personal Details
                                </button>
                            </h2>
                            <div id="PD-section" class="accordion-collapse collapse show" aria-labelledby="PersonalDetails" data-bs-parent="#detail-sections">
                                <div class="accordion-body">
                                    <form className="bordered row">
                                        <div class="form-group col-md-6 d-flex flex-column mb-2">
                                            <label htmlFor="PD-first-name">First Name</label>
                                            <input type="text" id="PD-first-name" placeholder="e.g. Chinwe"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column">
                                            <label htmlFor="PD-last-name">Last Name</label>
                                            <input type="text" id="PD-last-name" placeholder="e.g. Ibegbu"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column mb-2">
                                            <label htmlFor="PD-email">Email Address</label>
                                            <input type="text" id="PD-email" placeholder="e.g. chinwe.ibegbu@gmail.com"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column">
                                            <label htmlFor="PD-phone">Phone</label>
                                            <input type="text" id="PD-phone" placeholder="e.g. +234 706 056 0968"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column mb-2">
                                            <label htmlFor="PD-city">City</label>
                                            <input type="text" id="PD-city" placeholder="e.g. Lagos"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column">
                                            <label htmlFor="PD-country">Country</label>
                                            <input type="text" id="PD-country" placeholder="e.g. Nigeria"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column mb-2">
                                            <label htmlFor="PD-nationality">Nationality</label>
                                            <input type="text" id="PD-nationality" placeholder="e.g. Nigerian"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column">
                                            <label htmlFor="PD-linkedin">LinkedIn Username</label>
                                            <input type="text" id="PD-linkedin" placeholder="e.g. chinwe-ibegbu"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="Education">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#EDU-section" aria-expanded="false" aria-controls="EDU-section">
                                    Education
                                </button>
                            </h2>
                            <div id="EDU-section" class="accordion-collapse collapse" aria-labelledby="Education" data-bs-parent="#detail-sections">
                                <div class="accordion-body">
                                    <form className="bordered row">
                                        <div class="form-group col-md-6 d-flex flex-column mb-2">
                                            <label htmlFor="PD-first-name">First Name</label>
                                            <input type="text" id="PD-first-name" placeholder="e.g. Chinwe"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column">
                                            <label htmlFor="PD-last-name">Last Name</label>
                                            <input type="text" id="PD-last-name" placeholder="e.g. Ibegbu"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="AchievementsAwards">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#AA-section" aria-expanded="false" aria-controls="AA-section">
                                    Achievements & Awards
                                </button>
                            </h2>
                            <div id="AA-section" class="accordion-collapse collapse" aria-labelledby="AchievementsAwards" data-bs-parent="#detail-sections">
                                <div class="accordion-body">
                                    <form className="bordered row">
                                        <div class="form-group col-md-6 d-flex flex-column mb-2">
                                            <label htmlFor="PD-first-name">First Name</label>
                                            <input type="text" id="PD-first-name" placeholder="e.g. Chinwe"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column">
                                            <label htmlFor="PD-last-name">Last Name</label>
                                            <input type="text" id="PD-last-name" placeholder="e.g. Ibegbu"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="WorkExperience">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#WK-section" aria-expanded="false" aria-controls="WK-section">
                                    Work Experience
                                </button>
                            </h2>
                            <div id="WK-section" class="accordion-collapse collapse" aria-labelledby="WorkExperience" data-bs-parent="#detail-sections">
                                <div class="accordion-body">
                                    <form className="bordered row">
                                        <div class="form-group col-md-6 d-flex flex-column mb-2">
                                            <label htmlFor="PD-first-name">First Name</label>
                                            <input type="text" id="PD-first-name" placeholder="e.g. Chinwe"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column">
                                            <label htmlFor="PD-last-name">Last Name</label>
                                            <input type="text" id="PD-last-name" placeholder="e.g. Ibegbu"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="Skills">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#SK-section" aria-expanded="false" aria-controls="SK-section">
                                    Skills
                                </button>
                            </h2>
                            <div id="SK-section" class="accordion-collapse collapse" aria-labelledby="Skills" data-bs-parent="#detail-sections">
                                <div class="accordion-body">
                                    <form className="bordered row">
                                        <div class="form-group col-md-6 d-flex flex-column mb-2">
                                            <label htmlFor="PD-first-name">First Name</label>
                                            <input type="text" id="PD-first-name" placeholder="e.g. Chinwe"></input>
                                        </div>
                                        <div class="form-group col-md-6 d-flex flex-column">
                                            <label htmlFor="PD-last-name">Last Name</label>
                                            <input type="text" id="PD-last-name" placeholder="e.g. Ibegbu"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cv-editor-preview d-flex flex-column align-items-center col-xl-6 bordered">
                    <p className="title">CV Preview</p>
                    <div className="pdf">
                    </div>
                    <div className="interaction-btns mt-2">
                        <button className="button btn mx-1">Download CV</button>
                        <button className="button-icon btn mx-1">
                            <i className="bi-share" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CVEditor;