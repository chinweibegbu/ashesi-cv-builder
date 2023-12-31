import React from "react";
import { months } from "./months.js";

const educationEntryDateGenerator = (entry) => {
    const start = new Date(entry.start_date);

    if (!(entry.start_date)) {
        return "";
    } else {
        if (entry.ongoing === true) {
            return months[start.getMonth()] + " " + start.getFullYear() + " - Present";
        } else {
            if (entry.end_date) {
                const end = new Date(entry.end_date);
                return months[start.getMonth()] + " " + start.getFullYear() + " - " + months[end.getMonth()] + " " + end.getFullYear();
            } else {
                return months[start.getMonth()] + " " + start.getFullYear() + " - END DATE";
            }
        }
    }
}
const achievementsAwardsEntryDateGenerator = (entry) => {
    const start = new Date(entry.date_awarded);

    if (!(entry.date_awarded)) {
        return "";
    } else {
        if (entry.duration_type === "One-time") {
            return months[start.getMonth()] + " " + start.getFullYear();
        } else if ((entry.duration_type === "Continuous") && (entry.ongoing === true)) {
            return months[start.getMonth()] + " " + start.getFullYear() + " - Present";
        } else if ((entry.duration_type === "Continuous") && (entry.ongoing === false)) {
            if (entry.date_expired) {
                const end = new Date(entry.date_expired);
                return months[start.getMonth()] + " " + start.getFullYear() + " - " + months[end.getMonth()] + " " + end.getFullYear();
            } else {
                return months[start.getMonth()] + " " + start.getFullYear() + " - END DATE";
            }
        }
    }
}
const workExperienceEntryDateGenerator = (entry) => {
    const start = new Date(entry.start_date);

    if (!(entry.start_date)) {
        return "";
    } else {
        if (entry.ongoing === true) {
            return months[start.getMonth()] + " " + start.getFullYear() + " - Present";
        } else {
            if (entry.end_date) {
                const end = new Date(entry.end_date);
                return months[start.getMonth()] + " " + start.getFullYear() + " - " + months[end.getMonth()] + " " + end.getFullYear();
            } else {
                return months[start.getMonth()] + " " + start.getFullYear() + " - END DATE";
            }
        }
    }
}
const skillLevelDisplayGenerator = (level) => {
    let display = [];
    let numFilled = {
        'Novice': 1,
        'Intermediate': 2,
        'Advanced': 3,
        'Proficient': 4,
        'Expert': 5
    };

    const circleFilled = <i className="bi-circle-fill" />,
        circleEmpty = <i className="bi-circle" />;

    for (let i = 0; i < numFilled[level]; i++) {
        display.push(circleFilled);
    }
    for (let i = 0; i < (5 - numFilled[level]); i++) {
        display.push(circleEmpty);
    }

    const compositeDisplay = <div className="d-flex">
        {
            display.map((circle, key) => {
                return React.cloneElement(
                    circle,
                    { key: key }
                );
            })
        }
    </div>;

    return compositeDisplay;
}

export const pdfUtils = {
    educationEntryDateGenerator,
    achievementsAwardsEntryDateGenerator,
    workExperienceEntryDateGenerator,
    skillLevelDisplayGenerator
}