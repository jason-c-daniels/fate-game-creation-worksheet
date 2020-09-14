<style>
    @import "GameInfo.css";
</style>

<script>
export let name;
export let setting;
</script>
<input id="game-name" placeholder="Game Name" type="text" bind:value={name} />
<input id="setting-description" placeholder="Setting/Scale" type="text" bind:value={setting} />
