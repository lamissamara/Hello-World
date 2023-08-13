<template>
    <div class="task">
        {{ task.text }}
    </div>
</template>

<script>
    export default {
        name: "TaskComponent",
        props: {
            task: Object,
        },
    };
</script>

<style scoped>
    .task {
        background-color: #f9f9f9;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 5px 0;
    }
</style>
