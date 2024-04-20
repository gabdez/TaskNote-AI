<template>
    <v-container class="pt-15">
        <v-row>
            <v-col v-for="list in appStore.todoList" :key="list.id" cols="4">
                <TodoCard :todolist="list" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>

<script setup lang="ts">
import TodoCard from '@/components/todo-card.vue';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
</script>