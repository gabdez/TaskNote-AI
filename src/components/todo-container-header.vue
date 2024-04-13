<template>
    <v-sheet class="w-100 bg-transparent py-5 d-flex justify-space-between align-center">
        <v-text-field v-model="todolistTitle" hide-details variant="plain" counter="20"
            class="text-white custom-todolist-title" />
        <div>
            <v-btn :icon="themeIcon" color="white" variant="plain" @click="toggleTheme" />
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

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const themeIcon = computed(() => {
    return theme.global.current.value.dark ? "mdi-weather-sunny" : "mdi-moon-waning-crescent";
})

const todolistTitle = ref("My todo");

</script>