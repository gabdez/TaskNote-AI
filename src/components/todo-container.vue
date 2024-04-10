<template>
    <v-sheet fluid max-width="750px" class="bg-transparent w-100 d-flex flex-column align-center">
        <TodoContainerHeader />
        <TodoNewLine />
        <v-sheet class="w-100" elevation="10" rounded>
            <TodoLine v-for="(todo, index) in appStore.filteredTodos" :key="todo.id" :todo
                :roundedCorner="index === 0" />
            <TodoContainerFooter />
        </v-sheet>
        <TodoContainerFooterMobile />
    </v-sheet>
</template>

<style scoped></style>

<script setup lang="ts">
import TodoContainerFooter from '@/components/todo-container-footer.vue';
import TodoContainerFooterMobile from '@/components/todo-container-footer-mobile.vue';
import TodoContainerHeader from '@/components/todo-container-header.vue';
import TodoLine from '@/components/todo-line.vue';
import TodoNewLine from '@/components/todo-new-line.vue';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

</script>