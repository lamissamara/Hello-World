<template>
    <div class="list">
        <h3>{{ listTitle }}</h3>
        <TaskComponent v-for="task in localTasks" :key="task.id" :task="task" />
        <input v-model="newTaskText" @keyup.enter="addTask" class="new-task-input" />
        <div class="add-task" @click="addTask">+ Add Task</div>
    </div>
</template>

<script>
    import TaskComponent from "./TaskComponent.vue";

    export default {
        name: "ListComponent",
        components: {
            TaskComponent,
        },
        props: {
            listTitle: String,
            tasks: Array,
        },
        data() {
            return {
                newTaskText: "",
                localTasks: this.tasks.slice(), 
            };
        },
        methods: {
            addTask() {
                if (this.newTaskText.trim() !== "") {
                    const newTask = { id: this.localTasks.length + 1, text: this.newTaskText };
                    this.localTasks.push(newTask); 
                    this.newTaskText = "";
                    this.$emit("update-tasks", this.localTasks); 
                }
            },
        },
    };
</script>

<style scoped>
    .list {
        background-color: #ffffff;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 10px;
    }

    .new-task-input {
        padding: 8px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-top: 5px;
    }

    .add-task {
        cursor: pointer;
        color: #888;
    }
</style>
