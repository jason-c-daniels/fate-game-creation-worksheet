<style>
    @import "FaceOrPlace.css";
</style>

<script>
    export let name="";
    export let issuesOrAspects="";
    export let props={};
</script>

<div class="flex-item-1" {...props}>
    <textarea id="face-or-place-name" rows="3" placeholder="Name" bind:value={name} />
    <textarea id="face-or-place-issue-or-aspect" rows="4" placeholder="Issue / Aspect" bind:value={issuesOrAspects} />

</div>