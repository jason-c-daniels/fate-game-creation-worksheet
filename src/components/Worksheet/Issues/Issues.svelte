<style>
    @import "Issues.css";
</style>

<script>
    import Section from "../Section/Section.svelte";
    export let currentIssues;
    export let impendingIssues;
</script>

<Section title="Issues" props={{style:"margin-top:0.75rem;"}}>
    <div class="flex-row">
    <textarea id="current-issues"
              class="flex-item-1"
              bind:value={currentIssues}
              placeholder="Current Issues"
              rows="5"
              style="resize: none; overflow: hidden" />

    <textarea id="impending-issues"
              class="flex-item-1"
              bind:value={impendingIssues}
              placeholder="Impending Issues"
              style="margin-left: 1rem; resize: none; overflow: hidden"
              rows="5"/>
    </div>
</Section>

