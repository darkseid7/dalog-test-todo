import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CurrentDate } from "@/components/todo/current-date";
import { TodoList } from "@/components/todo/todo-list";
import { AddTodoForm } from "@/components/todo/add-todo-form";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Todo List</CardTitle>
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
    </div>
  );
}

export default App;
