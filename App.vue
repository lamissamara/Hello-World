<template>
    <div id="app">
        <BoardComponent />
    </div>
</template>

<script>
    import BoardComponent from "./BoardComponent.vue"; 

    export default {
        name: "App",
        components: {
            BoardComponent, 
        },
    };
</script>

<style>
    #app {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
