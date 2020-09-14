<style>
    @import "Skills.css";
</style>

<script>
    import Section from "../Section";
    export let skills=[
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
    ];
    export let props={};
    props={...props,style:"flex-grow:1;flex-shrink:1;width:100%"};
</script>

<Section title="Skills" {props}>

    <div class="flex-row" style="width: 100%">
        <input type="text" bind:value={skills[0]} class="flex-item-1 gap" />
        <input type="text" bind:value={skills[1]} class="flex-item-1 gap"/>
        <input type="text" bind:value={skills[2]} class="flex-item-1"/>
    </div>
    <div class="flex-row" style="width: 100%">
        <input type="text" bind:value={skills[3]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[4]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[5]} class="flex-item-1"/>
    </div>
    <div class="flex-row" style="width: 100%">
        <input type="text" bind:value={skills[6]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[7]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[8]} class="flex-item-1"/>
    </div>
    <div class="flex-row" style="width: 100%">
        <input type="text" bind:value={skills[9]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[10]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[11]} class="flex-item-1"/>
    </div>
    <div class="flex-row" style="width: 100%">
        <input type="text" bind:value={skills[12]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[13]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[14]} class="flex-item-1"/>
    </div>
    <div class="flex-row" style="width: 100%">
        <input type="text" bind:value={skills[15]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[16]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[17]} class="flex-item-1"/>
    </div>
    <div class="flex-row" style="width: 100%">
        <input type="text" bind:value={skills[18]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[19]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[20]} class="flex-item-1"/>
    </div>
    <div class="flex-row" style="width: 100%">
        <input type="text" bind:value={skills[21]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[22]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[23]} class="flex-item-1"/>
    </div>
    <div class="flex-row" style="width: 100%">
        <input type="text" bind:value={skills[24]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[25]} class="gap flex-item-1"/>
        <input type="text" bind:value={skills[26]} class="flex-item-1"/>
    </div>

</Section>