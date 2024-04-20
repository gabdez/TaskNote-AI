<template>
    <v-hover>
        <template v-slot:default="{ isHovering, props }">
            <v-sheet v-bind="props" :elevation="isHovering || newListInput.length > 0 ? 10 : 0" rounded
                class="px-5 py-3 mb-10 bg-surface custom-hover-effect">
                <v-text-field v-model="newListInput" density="compact" class="pb-2" placeholder="Create a new list..."
                    variant="plain" hide-details @keyup.enter="createNewList" />
            </v-sheet>
        </template>
    </v-hover>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['createNewList'])

const newListInput = ref("");
const createNewList = () => {
    if (newListInput.value.trim()) {
        emit("createNewList", newListInput.value);
        newListInput.value = "";
    }
};

</script>