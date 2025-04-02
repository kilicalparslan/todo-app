import { useState, useEffect } from "react";

import Header from "./components/Header";
import TodoCount from "./components/TodoCount";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        return Array.isArray(parsedTasks) ? parsedTasks : [];
      }
      return [
        {
          title: "İlk görev",
          id: self.crypto.randomUUID(),
          is_completed: false,
        },
        {
          title: "İkinci görev",
          id: self.crypto.randomUUID(),
          is_completed: true,
        },
      ];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error(error);
    }
  }, [tasks]);

  const completed = tasks.filter((task) => task.is_completed === true).length;
  const total = tasks.length;
  return (
    <div className="min-h-screen bg-indigo-50 ">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <TodoCount completed={completed} total={total} />
        <TodoForm tasks={tasks} setTasks={setTasks} />
        <TodoList tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}

export default App;
