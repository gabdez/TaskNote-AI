<template>
    <v-container class="d-flex justify-center align-start">
        <v-sheet max-width="750px" class="bg-transparent pt-15 w-100 d-flex flex-column align-center">
            <TodoContainerHeader :title="todoList.title" @update-title="updateTitle" />
            <TodoNewLine @create-new-todo="createNewTodo" />
            <v-sheet class="w-100" elevation="10" rounded>
                <v-sheet class="w-100 todo-scrollable" rounded>
                    <VueDraggableNext class="dragArea list-group w-full" :list="filteredTodos">
                        <TodoLine v-for="(todo, index) in filteredTodos" :key="todo.id" :todo
                            :roundedCorner="index === 0" @delete-todo="deleteTodo"
                            @toggle-todo="toggleTodoActiveState" />
                    </VueDraggableNext>
                </v-sheet>
                <TodoContainerFooter :item-length="filteredTodos.length" :displayFooter="todoList.content.length > 0"
                    @clear-completed-todo="appStore.clearCompletedTodos(Number(props.id))" />
            </v-sheet>
            <!-- Display footer for mobile screen only -->
            <TodoContainerFooterMobile :displayFooter="todoList.content.length > 0" />
            <DragDropMessage />
        </v-sheet>
    </v-container>
</template>

<style scoped>
.todo-scrollable {
    max-height: 50vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>

<script setup lang="ts">
import TodoContainerFooter from '@/components/todo-container-footer.vue';
import TodoContainerFooterMobile from '@/components/todo-container-footer-mobile.vue';
import TodoContainerHeader from '@/components/todo-container-header.vue';
import TodoLine from '@/components/todo-line.vue';
import TodoNewLine from '@/components/todo-new-line.vue';
import DragDropMessage from '@/components/drag-drop-message.vue';
import { VueDraggableNext } from 'vue-draggable-next'
import { useAppStore } from '@/stores/app';
import { computed } from 'vue';
import type { TodoList } from '@/models/todos';

const appStore = useAppStore();
const props = defineProps<{
    id: string
}>();


const updateTitle = (newValue: string) => {
    todoList.value.title = newValue;
}

const deleteTodo = (todoId: number) => {
    console.log(todoId);
    appStore.deleteTodo(Number(props.id), todoId);
}

const toggleTodoActiveState = (todoId: number) => {
    appStore.toggleActiveState(Number(props.id), todoId);
}

const createNewTodo = (newTodoTitle: string) => {
    appStore.createNewTodo(Number(props.id), newTodoTitle);
}

// computeds
const todoList = computed(() => {
    const res: TodoList = {} as TodoList;
    return appStore.todoList.find(l => l.id === Number(props.id)) || res;
});

const filteredTodos = computed(() => {
    if (appStore.toggleActive === "all") return todoList.value.content;
    else return todoList.value.content.filter(t => appStore.toggleActive === "active" ? !t.isCompleted : t.isCompleted);
});

</script>