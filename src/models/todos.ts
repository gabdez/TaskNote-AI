export interface TodoList {
    id: number;
    title: string;
    content: Todo[]
}
export interface Todo {
    id: number;
    title: string;
    isCompleted: boolean
}