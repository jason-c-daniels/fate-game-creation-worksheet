<script>
    import GlobalCss from "../GlobalCss";
    /*-- Add support for Web Components to older browsers. --*/
    import "@webcomponents/webcomponentsjs/webcomponents-loader.js";
    import '@material/mwc-top-app-bar-fixed';
    import '@material/mwc-icon-button';
    import '@material/mwc-drawer';
    import '@material/mwc-icon';
    import '@material/mwc-list';
    import '@material/mwc-list/mwc-list-item';
    import '@material/mwc-list/mwc-check-list-item';
    import '@material/mwc-list/mwc-radio-list-item';
    import Worksheet from "../components/Worksheet";

    export let appSettings = {applicationName: "WARNING: Please pass appSettings from within main.js props."};

    let largePageHeading = true, pageNumberOnly = true;

    function printIt() {
        setTimeout(print,500);
    }

</script>
<style>
    @import "App.css";
</style>

<svelte:head>
    <title>{appSettings.applicationName}</title>

    <!-- Your application must load the Roboto and Material Icons fonts. -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
</svelte:head>

<GlobalCss/>

<main class="noprint">
    <mwc-top-app-bar-fixed>
                <div slot="title"><span>{appSettings.applicationName}</span></div>
                <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button>
                <mwc-icon-button icon="file_upload" slot="actionItems"></mwc-icon-button>
                <mwc-icon-button icon="print" slot="actionItems" on:click={printIt}></mwc-icon-button>
                <div id="content" style="margin: 10pt;">

                        <Worksheet />

                </div>
            </mwc-top-app-bar-fixed>
</main>

<main class="printme">
    <!-- This section is intended for print rendering only. You may suppress the rendering of this entire section
         to HTML if you like, but you'll need to ensure it's been rendered right before the print dialog is invoked.
         (i.e. print() )
     -->
       <Worksheet />

</main>
