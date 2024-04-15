<template>
    <div class="text-uppercase">
        <h2>
            TaskNote.AI
        </h2>
        <v-sheet v-for="list in appStore.todoList" :key="list.id" rounded
            @click="router.push({ path: `/todo-list/${list.id}` })">
            {{ list.title }}
        </v-sheet>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const appStore = useAppStore();
</script>