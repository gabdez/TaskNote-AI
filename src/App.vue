<template>
  <v-app>
    <v-container fluid class="bg-custo h-100 pt-15 d-flex justify-center align-start">
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

.bg-custo {
  background: linear-gradient(to left top, rgb(var(--v-theme-surface)), rgb(var(--v-theme-primary)));
  background: radial-gradient(50% 50% at 50% 50%, rgb(var(--v-theme-primary)) 0, #00dc8200);
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(var(--v-theme-surface)), rgb(var(--v-theme-primary), 0.50));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgb(var(--v-theme-surface)), rgb(var(--v-theme-primary), 0.50))
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