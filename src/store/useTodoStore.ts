import { create } from "zustand";

export interface Todo {
  id: number;
  title: string;
  status: "Todo" | "Doing" | "Done";
}

interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => Promise<{ success: boolean }>;
  fetchTodos: () => Promise<void>;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number, newStatus: "Todo" | "Doing" | "Done") => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  fetchTodos: async () => {
    try {
      const response = await fetch("http://localhost:3001/todos");
      const data = await response.json();
      set({ todos: data });
    } catch (error) {
      console.error(error);
    }
  },

  addTodo: async (title: string) => {
    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          status: "Todo",
        }),
      });
      const newTodo = await response.json();

      set((state) => ({
        todos: [...state.todos, newTodo],
      }));
      return { success: true };
    } catch (error) {
      console.error("Error adding todo:", error);
      return { success: false };
    }
  },

  removeTodo: async (id: number) => {
    try {
      await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      });
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    } catch (error) {
      console.error("Error removing todo:", error);
    }
  },

  toggleTodo: async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const updatedTodo = await response.json();

      set((state) => ({
        todos: state.todos.map((todo) => (todo.id === id ? updatedTodo : todo)),
      }));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  },
}));
