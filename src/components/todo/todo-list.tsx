import { useTodoStore } from "@/store/useTodoStore";
import { TodoItem } from "./todo-item";
import { AnimatePresence } from "motion/react";

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) {
    return <div>No todos</div>;
  }

  return (
    <AnimatePresence>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </AnimatePresence>
  );
}
