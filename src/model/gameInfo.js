export default function getNewGameInfo() {
    return {
        name: "",
        setting: "",
        currentIssues: "",
        impendingIssues: "",
        stuntsAndExtras: "",
        skills: [
            "Academics",
            "Athletics",
            "Burglary",
            "Contacts",
            "Crafts",
            "Deceive",
            "Drive",
            "Empathy",
            "Fight",
            "Investigate",
            "Lore",
            "Notice",
            "Physique",
            "Provoke",
            "Rapport",
            "Resources",
            "Shoot",
            "Stealth",
            "Will"
        ],
        facesAndPlaces: [
            {name: "", issuesOrAspects: ""},
            {name: "", issuesOrAspects: ""},
            {name: "", issuesOrAspects: ""},
            {name: "", issuesOrAspects: ""},
            {name: "", issuesOrAspects: ""},
            {name: "", issuesOrAspects: ""}
        ],
        dials: {
            numberOfAspects: 5,
            numberOfPhases: 3,
            skillCap: "Great (+4)",
            initialSkillsDistribution: "pyramid",
            numberOfColumns: "N/A",
            refreshRate: 3,
            typesOfStressTracks: "Physical and mental",
            numberOfInitialStunts: 3,
            defaultNumberOfStressBoxes: 2,
            defaultConsequenceSlots: "2/4/6"
        }
    };
}