<template>
  <v-app>
    <v-container fluid class="bg-contain bg-veryDarkBlue h-100 pt-15 d-flex justify-center align-start"
      :class="`bg-container-${isDarkMode ? 'dark' : 'light'}`">
      <TodoContainer />
    </v-container>
  </v-app>
</template>

<style scoped>
.bg-container-dark {
  background-image: url("./assets/images/bg-desktop-dark.jpg");
  background-size: auto;
}

.bg-container-light {
  background-image: url("./assets/images/bg-desktop-light.jpg");
  background-size: auto;
}
</style>

<script setup lang="ts">
import TodoContainer from "@/components/todo-container.vue"
import { computed, onMounted } from "vue";
import { useTheme } from 'vuetify'
import { useAppStore } from "./stores/app";

const appStore = useAppStore();
const theme = useTheme()

const isDarkMode = computed(() => {
  return theme.global.current.value.dark;
})

onMounted(async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  appStore.todos = data;
});

</script>