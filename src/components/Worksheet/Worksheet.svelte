<style>
    @import "Worksheet.css";
</style>

<script>
    import GameInfo from '../shared/GameInfo';
    import LogoBar from '../shared/LogoBar';
    import Issues from "./Issues";
    import FacesAndPlaces from "./FacesAndPlaces";
    import Dials from "./Dials/Dials.svelte";
    import Skills from "./Skills/Skills.svelte";
    import StuntsAndExtras from "./StuntsAndExtras/StuntsAndExtras.svelte";

    export let gameWorksheet = {
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
    }
</script>

<div class="page">
    <LogoBar />
    <GameInfo bind:name={gameWorksheet.name} bind:setting={gameWorksheet.setting}  />
    <Issues bind:currentIssues={gameWorksheet.currentIssues} bind:impendingIssues={gameWorksheet.impendingIssues} />
    <FacesAndPlaces bind:facesAndPlaces={gameWorksheet.facesAndPlaces} />
    <div class="flex-row" style="margin-top: 0.5rem; margin-bottom: 0.1rem">
        <Dials bind:dials={gameWorksheet.dials} props={{class:"flex-item-1", style:"margin-right:0.5rem;"}}  />
        <Skills bind:skills={gameWorksheet.skills} props={{class:"flex-item-1"}} />
    </div>
    <StuntsAndExtras bind:stuntsAndExtras={gameWorksheet.stuntsAndExtras} />
</div>