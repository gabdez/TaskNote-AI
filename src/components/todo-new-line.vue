<template>
    <v-sheet elevation="10" rounded class="w-100 d-flex ga-3 align-center px-5 py-3 mb-10 bg-surface">
        <div class="bg-transparent dot">
        </div>
        <v-text-field v-model="newTodoInput" density="compact" class="pb-2" placeholder="Create a new todo..."
            variant="plain" hide-details @keyup.enter="createNewTodo" />
    </v-sheet>
</template>

<style scoped></style>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

const appStore = useAppStore();

const newTodoInput = ref("");
const createNewTodo = () => {
    if (newTodoInput.value.trim()) {
        appStore.createNewTodo(newTodoInput.value);
        newTodoInput.value = "";
    }
};

</script>