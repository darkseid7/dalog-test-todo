import { create } from "zustand";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number, checked: boolean) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Next.js", completed: false },
    { id: 3, title: "Learn TypeScript", completed: false },
  ],
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, completed: false }],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodo: (id, checked) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: checked } : todo
      ),
    })),
}));
