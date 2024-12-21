import { Button } from "@/components/ui/button";
import { useTodoStore, Todo } from "@/store/useTodoStore";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const handleToggle = (newStatus: "Todo" | "Doing" | "Done") => {
    toggleTodo(todo.id, newStatus);
  };

  return (
    <div className="flex items-center gap-2 mb-2">
      <span
        style={{
          textDecoration: todo.status === "Done" ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>

      <ToggleGroup
        type="single"
        variant="outline"
        value={todo.status}
        onValueChange={(value) => {
          if (value === "Todo" || value === "Doing" || value === "Done") {
            handleToggle(value);
          }
        }}
      >
        <ToggleGroupItem value="Todo" aria-label="Toggle Todo">
          Todo
        </ToggleGroupItem>
        <ToggleGroupItem value="Doing" aria-label="Toggle Doing">
          Doing
        </ToggleGroupItem>
        <ToggleGroupItem value="Done" aria-label="Toggle Done">
          Done
        </ToggleGroupItem>
      </ToggleGroup>
      <Button className="bg-[#189AB4]" onClick={() => removeTodo(todo.id)}>
        Remove
      </Button>
    </div>
  );
}
