<template>
    <div v-if="appStore.toggleActive === 'all' && appStore.todos.length > 0"
        class="mt-10 text-body-1 text-darkGrayishBlue">
        Drag and Drop to reorder list items
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
</script>