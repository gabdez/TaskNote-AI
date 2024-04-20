<template>
    <v-sheet class="w-100 bg-transparent py-5 d-flex justify-space-between align-center text-center">
        <v-btn class="transition-x-left-sm" icon="mdi-arrow-left" variant="plain" @click="returnHome" />
        <v-text-field :model-value="props.title" @update:model-value="updateTitle" hide-details variant="plain"
            counter="20" class="custom-todolist-title" />
    </v-sheet>
</template>

<style scoped>
.transition-x-left-sm:hover {
    transform: translateX(-5px);
}

.letter-spacing {
    letter-spacing: 10px !important;
}

.custom-todolist-title :deep(input) {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    text-transform: none !important;
    font-weight: 500 !important;
    letter-spacing: 6px !important;
    padding-top: 0px;
    text-align: center;
}

.custom-todolist-title:hover :deep(input) {
    color: rgb(var(--v-theme-primary));
}
</style>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const emit = defineEmits(['updateTitle'])
const props = defineProps<{
    title: string
}>();
const router = useRouter()

const updateTitle = (newTitle: string) => {
    emit("updateTitle", newTitle);
}

const returnHome = () => {
    router.push({ path: "/home-page" })
}

</script>