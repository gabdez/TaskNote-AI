<template>
    <v-sheet class="w-100 bg-transparent py-5 d-flex justify-space-between">
        <div class="text-white text-uppercase text-h4 letter-spacing font-weight-medium">
            Todo
        </div>
        <div>
            <v-btn :icon="themeIcon" color="white" variant="plain" @click="toggleTheme" />
        </div>
    </v-sheet>
</template>

<style scoped>
.letter-spacing {
    letter-spacing: 10px !important;
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const themeIcon = computed(() => {
    return theme.global.current.value.dark ? "mdi-weather-sunny" : "mdi-moon-waning-crescent";
})

</script>