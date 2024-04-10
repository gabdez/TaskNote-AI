<template>
    <v-sheet fluid max-width="750px" class="bg-transparent w-100 d-flex flex-column align-center">
        <TodoContainerHeader />
        <TodoNewLine />
        <v-sheet class="w-100 todo-scrollable" elevation="10">
            <VueDraggableNext class="dragArea list-group w-full" :list="appStore.filteredTodos" @change="log">
                <TodoLine v-for="(todo, index) in appStore.filteredTodos" :key="todo.id" :todo
                    :roundedCorner="index === 0" />
            </VueDraggableNext>
        </v-sheet>
        <TodoContainerFooter />
        <!-- Display footer for mobile screen only -->
        <TodoContainerFooterMobile />
        <DragDropMessage />
    </v-sheet>
</template>

<style scoped>
.todo-scrollable {
    max-height: 475px;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>

<script setup lang="ts">
import TodoContainerFooter from '@/components/todo-container-footer.vue';
import TodoContainerFooterMobile from '@/components/todo-container-footer-mobile.vue';
import TodoContainerHeader from '@/components/todo-container-header.vue';
import TodoLine from '@/components/todo-line.vue';
import TodoNewLine from '@/components/todo-new-line.vue';
import DragDropMessage from '@/components/drag-drop-message.vue';
import { VueDraggableNext } from 'vue-draggable-next'
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();


const log = (event: any) => {
    console.log(event)
};

</script>