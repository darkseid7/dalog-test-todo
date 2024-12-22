import { useEffect } from "react";
import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";

import { CurrentDate } from "@/components/todo/current-date";
import { TodoList } from "@/components/todo/todo-list";
import { AddTodoForm } from "@/components/todo/add-todo-form";

import { useTodoStore } from "./store/useTodoStore";
import { motion } from "motion/react";

function App() {
  const fetchTodos = useTodoStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Toaster />
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Todo APP</CardTitle>
          <CardDescription>
            <CurrentDate />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddTodoForm />
          <TodoList />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default App;
