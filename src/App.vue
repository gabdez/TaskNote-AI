<template>
  <v-app>
    <v-container fluid class="bg-container bg-veryDarkBlue h-100 pt-15 d-flex justify-center align-start">
      <TodoContainer />
    </v-container>
  </v-app>
</template>

<style scoped>
.bg-container {
  background-image: url("./assets/images/bg-desktop-dark.jpg");
  background-size: contain;
}
</style>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import TodoContainer from "@/components/todo-container.vue"

const appStore = useAppStore();

</script>