export interface TodoList {
    id: number;
    title: string;
    content: Todo[],
    creationDate: number
}
export interface Todo {
    id: number;
    title: string;
    isCompleted: boolean,
    creationDate: number
}