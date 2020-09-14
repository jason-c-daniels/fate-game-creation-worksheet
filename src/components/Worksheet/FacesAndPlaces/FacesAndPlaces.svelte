<style>
    @import "FacesAndPlaces.css";
</style>

<script>
    import Section from "../Section";
    import FaceOrPlace from "./FaceOrPlace/FaceOrPlace.svelte";

    export let facesAndPlaces = [
        {name: "", issuesOrAspects: ""},
        {name: "", issuesOrAspects: ""},
        {name: "", issuesOrAspects: ""},
        {name: "", issuesOrAspects: ""},
        {name: "", issuesOrAspects: ""},
        {name: "", issuesOrAspects: ""},
    ]
</script>

<Section title="Faces and Places" props={{style:"margin-top:0.5rem;"}}>
    <div class="flex-row">
        <FaceOrPlace bind:name={facesAndPlaces[0].name} bind:issuesOrAspects={facesAndPlaces[0].issuesOrAspects} props={{class:"gap"}}/>
        <FaceOrPlace bind:name={facesAndPlaces[1].name} bind:issuesOrAspects={facesAndPlaces[1].issuesOrAspects} props={{class:"gap"}}/>
        <FaceOrPlace bind:name={facesAndPlaces[2].name} bind:issuesOrAspects={facesAndPlaces[2].issuesOrAspects} />
    </div>
    <div class="flex-row">
        <FaceOrPlace bind:name={facesAndPlaces[3].name} bind:issuesOrAspects={facesAndPlaces[3].issuesOrAspects} props={{class:"gap"}}/>
        <FaceOrPlace bind:name={facesAndPlaces[4].name} bind:issuesOrAspects={facesAndPlaces[4].issuesOrAspects} props={{class:"gap"}}/>
        <FaceOrPlace bind:name={facesAndPlaces[5].name} bind:issuesOrAspects={facesAndPlaces[5].issuesOrAspects} />
    </div>
</Section>