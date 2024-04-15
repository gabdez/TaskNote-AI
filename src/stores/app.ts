import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Todo, TodoList } from '@/models/todos';

export const useAppStore = defineStore('app', () => {

  const todoList: Ref<TodoList[]> = ref([]);
  const todos: Ref<Todo[]> = ref([]);
  const toggleActive = ref("all");




  const createNewTodo = (todoListId: number, input: string) => {
    const tl = todoList.value.find(t => t.id === todoListId);
    if (tl) {
      const newId = Math.floor(Math.random() * 100000);
      const newTodo: Todo = {
        id: newId,
        title: input,
        isCompleted: false
      }
      tl.content.unshift(newTodo);
    }
  };
  const toggleActiveState = (todoListId: number, todoId: number) => {
    const tl = todoList.value.find(t => t.id === todoListId);
    if (tl) {
      const i = tl.content.findIndex(t => t.id === todoId);
      if (i !== -1) {
        const todo = tl.content[i];
        todo.isCompleted = !todo.isCompleted;
      }
    }
  };
  const deleteTodo = (todoListId: number, todoId: number) => {
    const tl = todoList.value.find(t => t.id === todoListId);
    console.log(tl);
    if (tl) {
      const i = tl.content.findIndex(t => t.id === todoId);
      if (i !== -1) {
        console.log("splice");
        tl.content.splice(i, 1);
      }
    }
  };

  const clearCompletedTodos = (todoListId: number) => {
    const tl = todoList.value.find(t => t.id === todoListId);
    if (tl) {
      tl.content = tl.content.filter(t => !t.isCompleted);
    }
  };

  return {
    todos, todoList, createNewTodo, toggleActive, toggleActiveState, deleteTodo, clearCompletedTodos
  }
})
