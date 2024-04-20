<template>
    <v-sheet border="sm" rounded
        class="d-flex align-center text-center w-100 pa-5 mb-10 bg-surface cursor-pointer custom-todolist-card"
        min-height="150px">
        <div class="w-100 d-flex flex-column align-center">
            <v-btn icon="mdi-plus" variant="plain" />
            <span class="text-body-1 text-darkGrayishBlue">Create new TodoList</span>
        </div>
    </v-sheet>
</template>

<style scoped>
.custom-todolist-card:hover {
    --tw-shadow: 0px 0px 58px 20px rgba(var(--v-theme-primary), .15);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    transition: 0.2s;
}

.custom-todolist-card {
    transition: 0.2s;
}
</style>

<script setup lang="ts">
</script>