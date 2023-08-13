<template>
    <div class="board">
        <h2>{{ boardTitle }}</h2>
        <ListComponent v-for="list in lists"
                       :key="list.id"
                       :listTitle="list.title"
                       :tasks="list.tasks"
                       @add-task="addTaskToList(list)" />
    </div>
</template>

<script>
    import ListComponent from "./ListComponent.vue";

    export default {
        name: "BoardComponent",
        components: {
            ListComponent,
        },
        data() {
            return {
                boardTitle: "Trello-like Board",
                lists: [
                    {
                        id: 1,
                        title: "To Do",
                        tasks: [{ id: 1, text: "Task 1" }, { id: 2, text: "Task 2" }],
                    },
                    {
                        id: 2,
                        title: "In Progress",
                        tasks: [{ id: 3, text: "Task 3" }],
                    },
                    
                ],
            };
        },
        methods: {
            addTaskToList(list) {
                list.tasks.push({ id: list.tasks.length + 1, text: "New Task" });
            },
        },
    };
</script>

<style scoped>
    .board {
        background-color: #f0f0f0;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
</style>
