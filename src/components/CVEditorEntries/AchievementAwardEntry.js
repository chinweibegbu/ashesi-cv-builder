import React, { useState, useEffect } from "react";

function AchievementAwardEntry({ id, sectionTag, databaseId, handleEntryClear, handleEntryDeletion, cvDetails, setCvDetails }) {
    const [ongoing, setOngoing] = useState(false);
    const handleClick = () => {
        setOngoing(prevState => !prevState);
        setCvDetails({
            ...cvDetails,
            achievementsAwards: [
                ...cvDetails.achievementsAwards.slice(0, id),
                {
                    ...cvDetails.achievementsAwards[id],
                    ongoing: !(cvDetails.achievementsAwards[id].ongoing),
                },
                ...cvDetails.achievementsAwards.slice(id+1)
            ]
        });
    }
    const handleChange = (event, field) => {
        setCvDetails({
            ...cvDetails,
            achievementsAwards: [
                ...cvDetails.achievementsAwards.slice(0, id),
                {
                    ...cvDetails.achievementsAwards[id],
                    [field]: event.target.value,
                },
                ...cvDetails.achievementsAwards.slice(id+1)
            ]
        });
    }
    const handleSelect = (event, field) => {
        setCvDetails({
            ...cvDetails,
            achievementsAwards: [
                ...cvDetails.achievementsAwards.slice(0, id),
                {
                    ...cvDetails.achievementsAwards[id],
                    [field]: event.target.value,
                },
                ...cvDetails.achievementsAwards.slice(id+1)
            ]
        });
    }

    return (
        <div id={id}>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-name"}>Achievement/award name</label>
                    <input type="text" id={sectionTag + "-name"} placeholder="e.g. Overall Best Beginner Project" value={cvDetails.achievementsAwards[Number(id)].name} onChange={(e) => handleChange(e, "name")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-awader"}>Awarding Institution</label>
                    <input type="text" id={sectionTag + "-awarder"} placeholder="e.g. Major League Hacking" value={cvDetails.achievementsAwards[Number(id)].awarder} onChange={(e) => handleChange(e, "awarder")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-duration-type"}>Duration Type</label>
                    <select className="form-select" id={sectionTag + "-duration-type"} aria-label="One-time" value={cvDetails.achievementsAwards[Number(id)].durationType} onChange={(e) => handleSelect(e, "durationType")}>
                        <option value="One-time">One-time</option>
                        <option value="Continuous">Continuous</option>
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-date-awarded"}>Date Awarded</label>
                    <input type="date" id={sectionTag + "-date-awarded"} value={cvDetails.achievementsAwards[Number(id)].date_awarded} onChange={(e) => handleChange(e, "date_awarded")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-date-expired"}>Date Expired</label>
                    <input type="date" id={sectionTag + "-date-expired"} disabled={ongoing || (cvDetails.achievementsAwards[Number(id)].durationType==="One-time")} value={cvDetails.achievementsAwards[Number(id)].date_expired} onChange={(e) => handleChange(e, "date_expired")}></input>
                </div>
                <div className="form-group col-12 d-flex mb-2">
                    <input type="checkbox" id="achievement-ongoing" name="achievement-ongoing" value="achievement-ongoing" checked={ongoing} onChange={handleClick}></input>
                    <label htmlFor="achievement-ongoing" className='ms-1'>Accomplishment/award yet to expire</label>
                </div>
                <div className="form-group col-12 d-flex justify-content-end align-items-end mb-2">
                    {/* <button className='button section-button clear-button btn me-1' onClick={(event) => handleEntryClear(event, id, "Achievements & Awards")}>Clear Entry</button> */}
                    <button className='button section-button delete-button btn' onClick={(event) => handleEntryDeletion(event, id, "Achievements & Awards")}>Delete Entry</button>
                </div>
            </form>
        </div>
    );
}

export default AchievementAwardEntry;