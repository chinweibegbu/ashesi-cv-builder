import React, { useState } from "react";

function AchievementAwardEntry({ id, sectionTag, handleEntryDeletion }) {
    const [ongoing, setOngoing] = useState(false);
    const handleClick = (event) => {
        setOngoing(prevState => !prevState);
    }
    const [durationType, setDurationType] = useState(false);
    const handleSelect = (event) => {
        setDurationType(event.target.value);
    }

    return (
        <div id={id}>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-name"}>Achievement/award name</label>
                    <input type="text" id={sectionTag + "-name"} placeholder="e.g. Overall Best Beginner Project"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-awader"}>Awarding Institution</label>
                    <input type="text" id={sectionTag + "-awarder"} placeholder="e.g. Major League Hacking"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-duration-type"}>Duration Type</label>
                    <select className="form-select" id={sectionTag + "-duration-type"} aria-label="One-time" value={durationType} onChange={handleSelect}>
                        <option value="One-time">One-time</option>
                        <option value="Continuous">Continuous</option>
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-date-awarded"}>Date Awarded</label>
                    <input type="date" id={sectionTag + "-date-awarded"}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-date-expired"}>Date Expired</label>
                    <input type="date" id={sectionTag + "-date-expired"} disabled={ongoing || (durationType==="One-time")}></input>
                </div>
                <div className="form-group col-12 d-flex mb-2">
                    <input type="checkbox" id="achievement-ongoing" name="achievement-ongoing" value="achievement-ongoing" checked={ongoing} onChange={handleClick}></input>
                    <label htmlFor="achievement-ongoing" className='ms-1'>Accomplishment/award yet to expire</label>
                </div>
                <div className="form-group col-12 d-flex justify-content-end align-items-end mb-2">
                    <button className='button clear-button btn me-1'>Clear Entry</button>
                    <button className='button delete-button btn' onClick={() => handleEntryDeletion(id)}>Delete Entry</button>
                </div>
            </form>
        </div>
    );
}

export default AchievementAwardEntry;