import PersonalDetailsEntry from "../components/CVEditorEntries/PersonalDetailsEntry.js";
import EducationEntry from "../components/CVEditorEntries/EducationEntry.js";
import AchievementAwardEntry from "../components/CVEditorEntries/AchievementAwardEntry.js";
import WorkExperienceEntry from "../components/CVEditorEntries/WorkExperienceEntry.js";
import SkillEntry from "../components/CVEditorEntries/SkillEntry.js";
import { educationEntryTemplate, achievementAwardEntryTemplate, workExperienceEntryTemplate, skillEntryTemplate } from "./entryTemplates.js";

export const useSectionDetails = (cvDetails, setCvDetails) => {
    return {
        "Personal Details": {
            component: PersonalDetailsEntry,
            id: "PersonalDetails",
            cvDetailsKey: "header",
            sectionTag: "PD"
        },
        "Education": {
            component: EducationEntry,
            id: "Education",
            cvDetailsKey: "education",
            sectionTag: "ED",
            deactivate: (id) => {
                setCvDetails({
                    ...cvDetails,
                    education: [
                        ...cvDetails.education.slice(0, id),
                        {
                            ...cvDetails.education[id],
                            active: false,
                        },
                        ...cvDetails.education.slice(id + 1)
                    ]
                });
            },
            addEntryText: "Add educational experience",
            template: educationEntryTemplate
        },
        "Achievements & Awards": {
            component: AchievementAwardEntry,
            id: "AchievementsAwards",
            cvDetailsKey: "achievementsAwards",
            sectionTag: "AA",
            deactivate: (id) => {
                setCvDetails({
                    ...cvDetails,
                    achievementsAwards: [
                        ...cvDetails.achievementsAwards.slice(0, id),
                        {
                            ...cvDetails.achievementsAwards[id],
                            active: false,
                        },
                        ...cvDetails.achievementsAwards.slice(id + 1)
                    ]
                });
            },
            addEntryText: "Add achievement/award",
            template: achievementAwardEntryTemplate
        },
        "Work Experience": {
            component: WorkExperienceEntry,
            id: "WorkExperience",
            cvDetailsKey: "workExperience",
            sectionTag: "WK",
            deactivate: (id) => {
                setCvDetails({
                    ...cvDetails,
                    workExperience: [
                        ...cvDetails.workExperience.slice(0, id),
                        {
                            ...cvDetails.workExperience[id],
                            active: false,
                        },
                        ...cvDetails.workExperience.slice(id + 1)
                    ]
                });
            },
            addEntryText: "Add work experience",
            template: workExperienceEntryTemplate
        },
        "Skills": {
            component: SkillEntry,
            id: "Skills",
            cvDetailsKey: "skills",
            sectionTag: "SK",
            deactivate: (id) => {
                setCvDetails({
                    ...cvDetails,
                    skills: [
                        ...cvDetails.skills.slice(0, id),
                        {
                            ...cvDetails.skills[id],
                            active: false,
                        },
                        ...cvDetails.skills.slice(id + 1)
                    ]
                });
            },
            addEntryText: "Add skill",
            template: skillEntryTemplate
        }
    }
}
