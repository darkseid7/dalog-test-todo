import { useState } from "react";
import { motion } from "motion/react";
import { useTodoStore, Todo } from "@/store/useTodoStore";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Pencil, Save, Trash2, X } from "lucide-react";
import { DoneConfirmationDialog } from "./done-confirmation-modal";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  const [isDoneDialogOpen, setIsDoneDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

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

  const handleEditClick = () => {
    setIsEditing(true);
    setEditTitle(todo.title);
  };

  const handleSaveEdit = async () => {
    if (editTitle.trim() === "") return;
    await editTodo(todo.id, editTitle.trim());
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTitle(todo.title);
  };

  return (
    <motion.div
      className="flex flex-col gap-2 mb-4 text-lg
      bg-neutral-50 p-4 rounded-lg shadow-md
      "
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {isEditing ? (
        <div className="flex items-center gap-2">
          <input
            className="border rounded px-2 py-1"
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <Button
            className="bg-success-500 hover:bg-success-600"
            onClick={handleSaveEdit}
          >
            <Save />
          </Button>
          <Button
            className="bg-error-500 hover:bg-error-600"
            onClick={handleCancelEdit}
          >
            <X />
          </Button>
        </div>
      ) : (
        <>
          <span
            className={
              todo.status === "Done" ? "line-through text-gray-500" : ""
            }
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

            <Button
              className="bg-blue-500 hover:bg-blue-600"
              onClick={handleEditClick}
            >
              <Pencil strokeWidth={3} />
            </Button>

            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={() => removeTodo(todo.id)}
            >
              <Trash2 strokeWidth={3} />
            </Button>
          </div>
        </>
      )}

      <DoneConfirmationDialog
        open={isDoneDialogOpen}
        onClose={() => setIsDoneDialogOpen(false)}
        onConfirm={handleConfirmDone}
      />
    </motion.div>
  );
}
