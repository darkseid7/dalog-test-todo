import { Button } from "@/components/ui/button";
import { useTodoStore, Todo } from "@/store/useTodoStore";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const handleToggle = (checked: boolean) => {
    toggleTodo(todo.id, checked);
  };

  return (
    <div className="flex items-center gap-2 mb-2">
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>

      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem
          value="bold"
          aria-label="Toggle bold"
          defaultChecked={true}
          onClick={() => handleToggle(Boolean(false))}
        >
          Todo
        </ToggleGroupItem>
        <ToggleGroupItem
          value="italic"
          aria-label="Toggle italic"
          onClick={() => handleToggle(Boolean(false))}
        >
          Doing
        </ToggleGroupItem>
        <ToggleGroupItem
          value="underline"
          aria-label="Toggle underline"
          onClick={() => handleToggle(Boolean(true))}
        >
          Done
        </ToggleGroupItem>
      </ToggleGroup>
      <Button className="bg-[#189AB4]" onClick={() => removeTodo(todo.id)}>
        Remove
      </Button>
    </div>
  );
}
