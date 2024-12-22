// todo-item.tsx
import { useState } from "react";
import { motion } from "motion/react";
import { useTodoStore, Todo } from "@/store/useTodoStore";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Trash2 } from "lucide-react";
import { DoneConfirmationDialog } from "./done-confirmation-modal";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const [isDoneDialogOpen, setIsDoneDialogOpen] = useState(false);

  const handleConfirmDone = () => {
    toggleTodo(todo.id, "Done");
    setIsDoneDialogOpen(false);
  };

  const handleStatusClick = (newStatus: "Todo" | "Doing") => {
    if (todo.status !== newStatus) {
      toggleTodo(todo.id, newStatus);
    }
  };

  const handleDoneClick = () => {
    if (todo.status !== "Done") {
      setIsDoneDialogOpen(true);
    }
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
        <ToggleGroup type="single" variant="outline" value={todo.status}>
          <ToggleGroupItem
            value="Todo"
            aria-label="Toggle Todo"
            onClick={() => handleStatusClick("Todo")}
            className="data-[state=on]:bg-gray-400 px-2"
          >
            Todo
          </ToggleGroupItem>

          <ToggleGroupItem
            value="Doing"
            aria-label="Toggle Doing"
            onClick={() => handleStatusClick("Doing")}
            className="data-[state=on]:bg-blue-400 px-2"
          >
            Doing
          </ToggleGroupItem>

          <ToggleGroupItem
            value="Done"
            aria-label="Toggle Done"
            onClick={handleDoneClick}
            className="data-[state=on]:bg-green-500 px-2"
          >
            Done
          </ToggleGroupItem>
        </ToggleGroup>

        <Button className="bg-red-500" onClick={() => removeTodo(todo.id)}>
          <Trash2 strokeWidth={3} />
        </Button>
      </div>

      <DoneConfirmationDialog
        open={isDoneDialogOpen}
        onClose={() => setIsDoneDialogOpen(false)}
        onConfirm={handleConfirmDone}
      />
    </motion.div>
  );
}
