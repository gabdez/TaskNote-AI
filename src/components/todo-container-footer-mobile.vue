<template>
    <v-sheet v-if="props.displayFooter && $vuetify.display.smAndDown" rounded elevation="10" min-height="48px"
        class="mt-6 w-100 d-flex ga-3 justify-center align-center px-5 bg-surface">
        <div>
            <v-btn-toggle v-model="appStore.toggleActive" mandatory>
                <v-btn value="all" variant="plain" size="x-small"
                    :class="{ 'text-primary': 'all' === appStore.toggleActive }">All</v-btn>
                <v-btn value="active" variant="plain" size="x-small"
                    :class="{ 'text-primary': 'active' === appStore.toggleActive }">Active</v-btn>
                <v-btn value="completed" variant="plain" size="x-small"
                    :class="{ 'text-primary': 'completed' === appStore.toggleActive }">Completed</v-btn>
            </v-btn-toggle>
        </div>
    </v-sheet>
</template>

<style scoped></style>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
const props = defineProps<{
    displayFooter: boolean
}>();
</script>