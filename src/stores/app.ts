import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/models/todos';

export const useAppStore = defineStore('app', () => {

  const todos: Ref<Todo[]> = ref([]);
  const toggleActive = ref("all");

  const createNewTodo = (input: string) => {
    const newId = Math.floor(Math.random() * 100000);
    const newTodo: Todo = {
      id: newId,
      title: input,
      isCompleted: false
    }
    todos.value.unshift(newTodo);
  };
  const toggleActiveState = (id: number) => {
    const i = todos.value.findIndex(t => t.id === id);
    if (i !== -1) {
      const todo = todos.value[i];
      todo.isCompleted = !todo.isCompleted;
    }
  };
  const deleteTodo = (id: number) => {
    const i = todos.value.findIndex(t => t.id === id);
    if (i !== -1) {
      todos.value.splice(i, 1);
    }
  };

  // computeds
  const filteredTodos = computed(() => {
    if (toggleActive.value === "all") return todos.value;
    else return todos.value.filter(t => toggleActive.value === "active" ? !t.isCompleted : t.isCompleted);
  });

  const clearCompletedTodos = () => {
    todos.value = todos.value.filter(t => !t.isCompleted);
  };

  return {
    todos, createNewTodo, toggleActive, toggleActiveState, deleteTodo, filteredTodos, clearCompletedTodos
  }
})
