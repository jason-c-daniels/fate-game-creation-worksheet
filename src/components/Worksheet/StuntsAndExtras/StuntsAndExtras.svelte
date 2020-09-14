<style>
    @import "StuntsAndExtras.css";
</style>

<script>
    import Section from "../Section";
    export let stuntsAndExtras="";
    export let props={};
</script>

<Section title="Stunts and Extras" {...props}>
    <textarea rows="6" bind:value={stuntsAndExtras} />
</Section>