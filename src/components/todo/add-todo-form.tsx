import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTodoStore } from "@/store/useTodoStore";

export function AddTodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = () => {
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="flex gap-4 mb-4">
      <Input
        type="text"
        placeholder="Enter your todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button className="bg-[#189AB4]" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
