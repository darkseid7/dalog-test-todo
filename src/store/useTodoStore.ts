import { create } from "zustand";

export interface Todo {
  id: number;
  title: string;
  status: "Todo" | "Doing" | "Done";
}

interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number, newStatus: "Todo" | "Doing" | "Done") => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [
    { id: 1, title: "Learn React", status: "Todo" },
    { id: 2, title: "Learn Next.js", status: "Doing" },
    { id: 3, title: "Learn TypeScript", status: "Done" },
  ],
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, status: "Todo" }],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodo: (id, newStatus) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      ),
    })),
}));
