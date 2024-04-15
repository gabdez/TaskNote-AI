<template>
    <v-sheet class="w-100 bg-transparent py-5 d-flex justify-space-between align-center">
        <v-text-field :model-value="props.title" @update:model-value="updateTitle" hide-details variant="plain"
            counter="20" class="text-primary custom-todolist-title" />
        <div>
            <v-btn :icon="themeIcon" variant="plain" @click="toggleTheme" />
        </div>
    </v-sheet>
</template>

<style scoped>
.letter-spacing {
    letter-spacing: 10px !important;
}

.custom-todolist-title>>>input {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    text-transform: none !important;
    font-weight: 500 !important;
    letter-spacing: 6px !important;
    padding-top: 0px;
}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useTheme } from 'vuetify'

const theme = useTheme()
const emit = defineEmits(['updateTitle'])
const props = defineProps<{
    title: string
}>();

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const themeIcon = computed(() => {
    return theme.global.current.value.dark ? "mdi-weather-sunny" : "mdi-moon-waning-crescent";
})

const updateTitle = (newTitle: string) => {
    emit("updateTitle", newTitle);
}

</script>