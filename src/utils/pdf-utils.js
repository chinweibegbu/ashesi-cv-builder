import React from "react";
import { months } from "../data/months.js";

const educationEntryDateGenerator = (entry) => {
    const start = new Date(entry.startDate);

    if (!(entry.startDate)) {
        return "";
    } else {
        if (entry.ongoing === true) {
            return months[start.getMonth()] + " " + start.getFullYear() + " - Present";
        } else {
            if (entry.endDate) {
                const end = new Date(entry.endDate);
                return months[start.getMonth()] + " " + start.getFullYear() + " - " + months[end.getMonth()] + " " + end.getFullYear();
            } else {
                return months[start.getMonth()] + " " + start.getFullYear() + " - END DATE";
            }
        }
    }
}
const achievementsAwardsEntryDateGenerator = (entry) => {
    const start = new Date(entry.dateAwarded);

    if (!(entry.dateAwarded)) {
        return "";
    } else {
        if (entry.durationType === "One-time") {
            return months[start.getMonth()] + " " + start.getFullYear();
        } else if ((entry.durationType === "Continuous") && (entry.ongoing === true)) {
            return months[start.getMonth()] + " " + start.getFullYear() + " - Present";
        } else if ((entry.durationType === "Continuous") && (entry.ongoing === false)) {
            if (entry.dateExpired) {
                const end = new Date(entry.dateExpired);
                return months[start.getMonth()] + " " + start.getFullYear() + " - " + months[end.getMonth()] + " " + end.getFullYear();
            } else {
                return months[start.getMonth()] + " " + start.getFullYear() + " - END DATE";
            }
        }
    }
}
const workExperienceEntryDateGenerator = (entry) => {
    const start = new Date(entry.startDate);

    if (!(entry.startDate)) {
        return "";
    } else {
        if (entry.ongoing === true) {
            return months[start.getMonth()] + " " + start.getFullYear() + " - Present";
        } else {
            if (entry.endDate) {
                const end = new Date(entry.endDate);
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