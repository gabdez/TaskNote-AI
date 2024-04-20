<template>
  <v-app>
    <!-- Header -->
    <v-app-bar elevation="0" color="transparent">
      <v-app-bar-title class="text-h4 custom-font-weight-bold text-uppercase">
        SmartNote<span class="text-primary">.AI</span>
      </v-app-bar-title>
      <v-app-bar-nav-icon>
        <v-btn :icon="themeIcon" variant="plain" @click="toggleTheme" />
      </v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Content -->
    <v-container fluid class="bg-custo h-100 pt-15">
      <!-- <v-divider class="mt-1 mx-10" /> -->
      <router-view v-slot="{ Component }">
        <v-slide-y-transition mode="out-in">
          <component :is="Component" />
        </v-slide-y-transition>
      </router-view>
    </v-container>
  </v-app>
</template>

<style scoped>
.custom-font-weight-bold :deep(*) {
  font-weight: 500 !important;
}

.bg-custo {
  /* background: linear-gradient(to left top, rgb(var(--v-theme-surface)), rgb(var(--v-theme-primary)));
  background: radial-gradient(50% 50% at 50% 50%, rgb(var(--v-theme-primary)) 0, #00dc8200); */
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to bottom, rgba(var(--v-theme-surface)), rgb(var(--v-theme-primary), 0.50));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to bottom, rgb(var(--v-theme-surface)), rgb(var(--v-theme-primary), 0.50))
}
</style>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useTheme } from 'vuetify'
import { useAppStore } from "./stores/app";
import type { TodoList } from '@/models/todos';

const appStore = useAppStore();
const theme = useTheme()

onMounted(async () => {
  let data: TodoList[] = []
  const response = await fetch("./data.json");
  data = await response.json();
  console.log(data);
  appStore.todoList = data;
});


function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const themeIcon = computed(() => {
  return theme.global.current.value.dark ? "mdi-weather-sunny" : "mdi-moon-waning-crescent";
})


</script>