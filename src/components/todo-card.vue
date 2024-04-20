<template>
    <v-sheet border="sm" rounded
        class="position-relative d-flex flex-column w-100 pa-5 bg-surface cursor-pointer custom-todolist-card"
        height="250px" width="350px" @click="router.push({ path: `/todo-list/${props.todolist.id}` })">
        <div class="todo-card-title text-h5">
            {{ props.todolist.title }}
        </div>
        <div class="text-darkGrayishBlue">
            {{ getTodoListDateFormatted }}
        </div>
        <div class="d-flex flex-column justify-end text-body-1 text-truncate w-100">
            <div v-for="todo in getTodosContent" :key="todo.id" class="text-truncate" max-height="50px">
                <v-icon size="small" :icon="todo.isCompleted ? 'mdi-check' : 'mdi-radiobox-blank'" />
                {{ todo.title }}
            </div>
            <div v-if="props.todolist.content.length > 5">
                ...
            </div>
        </div>
        <div class="position-absolute bottom-right-position">
            <v-chip>
                {{ props.todolist.content.filter(t => t.isCompleted).length }}
                /
                {{ props.todolist.content.length }}
                <v-icon class="ml-1" size="small" icon="mdi-check" />
            </v-chip>
        </div>
    </v-sheet>
</template>

<style scoped>
.bottom-right-position {
    bottom: 10px;
    right: 10px;
}

.todo-card-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.custom-todolist-card:hover {
    box-shadow: 0px 4px 100px -40px rgba(26, 153, 221, .70);
    border-color: rgb(var(--v-theme-primary)) !important;
    transition: 0.2s;
    transform: translateY(-4px);
}

.custom-todolist-card {
    transition: 0.2s;
}
</style>

<script setup lang="ts">
import type { TodoList } from "@/models/todos";
import { computed } from "vue";
import { useRouter } from 'vue-router'


const props = defineProps<{
    todolist: TodoList,
}>();
const router = useRouter()

const getTodoListDateFormatted = computed(() => {
    return getFormatedDate(props.todolist.creationDate);
});

const getTodosContent = computed(() => {
    const data = props.todolist.content;
    return data.slice(0, (data.length >= 5 ? 5 : data.length));
});

const getFormatedDate = (date: number) => {
    const d = new Date(date);
    return d.toDateString().split(" ").slice(1).join(" ");
}

</script>