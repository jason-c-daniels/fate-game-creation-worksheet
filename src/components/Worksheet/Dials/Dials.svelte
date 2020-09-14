<style>
    @import "Dials.css";
</style>

<script>
    import Section from "../Section";

    export let dials = {
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
    };
    export let props = {};
    props = {...props, style: "flex-grow:1;flex-shrink:1;width:100%; margin-right:0.75rem;"};

</script>

<Section title="Dials" {props}>
    <div class="row" style="width: 100%">
        <label>Number of aspects</label>
        <input type="number" class="small" bind:value={dials.numberOfAspects}>

    </div>
    <div class="row" style="width: 100%">
        <label>Number of phases</label>
        <input type="number" class="small" bind:value={dials.numberOfPhases}>

    </div>
    <div class="row" style="width: 100%" >
        <label>Skill cap</label>
        <input type="text" class="full" bind:value={dials.skillCap}>

    </div>
    <div class="row" style="width: 100%">
        <label>Skill pyramid or columns</label>
        <input type="text" class="full" bind:value={dials.initialSkillsDistribution}>

    </div>
    <div class="row" style="width: 100%">
        <label>Number of columns</label>
        <input type="text" class="small" bind:value={dials.numberOfColumns}>

    </div>
    <div class="row" style="width: 100%">
        <label>Refresh rate</label>
        <input type="number" class="small" bind:value={dials.refreshRate}>
    </div>
    <div class="row" style="width: 100%">
        <label>Number of initial stunts</label>
        <input type="number" class="small" bind:value={dials.numberOfInitialStunts}>

    </div>
    <div class="row" style="width: 100%">
        <label>Types of stress tracks</label>
        <input type="text" class="full" bind:value={dials.typesOfStressTracks}>

    </div>
    <div class="row" style="width: 100%">
        <label>Default number of stress boxes</label>
        <input type="number" class="small" bind:value={dials.defaultNumberOfStressBoxes}>

    </div>
    <div class="row" style="width: 100%">
        <label>Default conseqeunce slots</label>
        <input type="text" class="full" bind:value={dials.defaultConsequenceSlots}>

    </div>

</Section>