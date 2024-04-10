<template>
    <v-sheet fluid max-width="750px" class="bg-transparent w-100 d-flex flex-column align-center">
        <TodoContainerHeader />
        <TodoNewLine />
        <v-sheet class="w-100" elevation="10" rounded>
            <VueDraggableNext class="dragArea list-group w-full" :list="appStore.filteredTodos" @change="log">
                <TodoLine v-for="(todo, index) in appStore.filteredTodos" :key="todo.id" :todo
                    :roundedCorner="index === 0" />
            </VueDraggableNext>
            <TodoContainerFooter />
        </v-sheet>
        <!-- Display footer for mobile screen only -->
        <TodoContainerFooterMobile />
        <div v-if="appStore.toggleActive === 'all'" class="mt-10 text-body-1 text-darkGrayishBlue">
            Drag and Drop to reorder list items
        </div>
    </v-sheet>
</template>

<style scoped></style>

<script setup lang="ts">
import TodoContainerFooter from '@/components/todo-container-footer.vue';
import TodoContainerFooterMobile from '@/components/todo-container-footer-mobile.vue';
import TodoContainerHeader from '@/components/todo-container-header.vue';
import TodoLine from '@/components/todo-line.vue';
import TodoNewLine from '@/components/todo-new-line.vue';
import { VueDraggableNext } from 'vue-draggable-next'
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();


const log = (event: any) => {
    console.log(event)
};

</script>