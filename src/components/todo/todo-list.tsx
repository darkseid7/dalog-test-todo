import { useTodoStore } from "@/store/useTodoStore";
import { TodoItem } from "./todo-item";

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) {
    return <div>No todos</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
