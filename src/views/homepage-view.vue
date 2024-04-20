<template>
    <v-container class="pt-15">
        <v-row justify="center">
            <v-col cols="5">
                <NewTodoList @create-new-list="createNewList" />
            </v-col>
        </v-row>
        <v-row>
            <v-scale-transition :group="true">
                <v-col v-for="list in appStore.todoList" :key="list.id" cols="4">
                    <TodoCard :todolist="list" />
                </v-col>
            </v-scale-transition>
        </v-row>
    </v-container>
</template>

<style scoped></style>

<script setup lang="ts">
import NewTodoList from '@/components/new-todo-list.vue';
import TodoCard from '@/components/todo-card.vue';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

const createNewList = (newListTitle: string) => {
    appStore.createNewList(newListTitle);
}
</script>