import { useTodoStore } from "@/store/useTodoStore";
import { TodoItem } from "./todo-item";
import { AnimatePresence, motion } from "motion/react";

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  const activeTodos = todos.filter((t) => t.status !== "Done");
  const doneTodos = todos.filter((t) => t.status === "Done");

  return (
    <div>
      <div className="">
        <AnimatePresence>
          {activeTodos.length > 0 && (
            <div className="mb-4">
              <h2 className="mb-2 text-lg font-semibold text-gray-700">
                Active Todos
              </h2>
              {activeTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
      <div className="">
        <AnimatePresence>
          {doneTodos.length > 0 && (
            <motion.div
              className="my-10"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="mb-2 text-lg font-semibold text-gray-700">
                Done Todos
              </h2>
              {doneTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {todos.length === 0 && (
        <AnimatePresence>
          <motion.h3
            className="text-center font-semibold text-xl"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            Nothing to do
          </motion.h3>
        </AnimatePresence>
      )}
    </div>
  );
}
