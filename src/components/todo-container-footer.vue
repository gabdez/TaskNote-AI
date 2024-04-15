<template>
    <v-sheet v-if="props.displayFooter" min-height="48px"
        class="text-darkGrayishBlue rounded-bottom w-100 d-flex ga-3 justify-space-between align-center px-5 bg-surface">
        <div class="text-caption">
            {{ props.itemLength }} items left
        </div>
        <div v-if="$vuetify.display.mdAndUp">
            <v-btn-toggle v-model="appStore.toggleActive" mandatory>
                <v-btn value="all" variant="plain" size="x-small"
                    :class="{ 'text-primary': 'all' === appStore.toggleActive }">All</v-btn>
                <v-btn value="active" variant="plain" size="x-small"
                    :class="{ 'text-primary': 'active' === appStore.toggleActive }">Active</v-btn>
                <v-btn value="completed" variant="plain" size="x-small"
                    :class="{ 'text-primary': 'completed' === appStore.toggleActive }">Completed</v-btn>
            </v-btn-toggle>
        </div>
        <v-btn variant="text" color="primary" size="x-small" @click="emit('clearCompletedTodo')">Clear
            Completed</v-btn>
    </v-sheet>
</template>

<style scoped>
.rounded-bottom {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
</style>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
const emit = defineEmits(['clearCompletedTodo'])
const props = defineProps<{
    itemLength: number,
    displayFooter: boolean
}>();


</script>