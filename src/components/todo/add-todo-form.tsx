import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTodoStore } from "@/store/useTodoStore";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";

export function AddTodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (newTodo.trim() === "") return;
    const res = await addTodo(newTodo);
    setNewTodo("");
    if (!res.success) {
      return toast({
        title: "Error",
        description: "Failed to add todo",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Todo Added",
        description: `Todo ${newTodo} has been added
        successfully.`,
        variant: "success",
      });
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <Input
        type="text"
        placeholder="Enter your todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button className="bg-success-500" onClick={handleSubmit}>
        <Plus strokeWidth={3} />
      </Button>
    </div>
  );
}
