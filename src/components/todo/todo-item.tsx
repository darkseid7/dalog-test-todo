import { Button } from "@/components/ui/button";
import { useTodoStore, Todo } from "@/store/useTodoStore";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion } from "motion/react";
import { useToast } from "@/hooks/use-toast";
import { Trash2 } from "lucide-react";

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
    <motion.div
      className="flex flex-col gap-2 mb-2"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <span
        style={{
          textDecoration: todo.status === "Done" ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
      <div className="flex gap-1">
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
          <ToggleGroupItem
            value="Todo"
            aria-label="Toggle Todo"
            className={"data-[state=on]:bg-gray-500"}
          >
            Todo
          </ToggleGroupItem>
          <ToggleGroupItem
            value="Doing"
            aria-label="Toggle Doing"
            className="data-[state=on]:bg-info-700"
          >
            Doing
          </ToggleGroupItem>
          <ToggleGroupItem
            value="Done"
            aria-label="Toggle Done"
            className="data-[state=on]:bg-success-500"
          >
            Done
          </ToggleGroupItem>
        </ToggleGroup>
        <Button className="bg-error-500" onClick={() => removeTodo(todo.id)}>
          <Trash2 strokeWidth={3} />
        </Button>
      </div>
    </motion.div>
  );
}
