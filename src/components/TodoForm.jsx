import React, { useState } from "react";

const TodoForm = ({ tasks, setTasks }) => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.task.value;
    if (!value) {
      setError(true);
      return;
    }
    const newTask = {
      title: value,
      id: Date.now(),
      is_completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    const newTodoList = JSON.stringify([...tasks, newTask]);
    localStorage.setItem("tasks", newTodoList);
    setError(false);
    e.target.reset();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value) {
      setError(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <form
        className="flex gap-4"
        onSubmit={handleSubmit}
        onChange={handleInputChange}
      >
        <input
          type="text"
          id="task"
          placeholder="Yeni görev ekle..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
        />
        <button
          type="submit"
          className="rounded-lg whitespace-nowrap bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 hover:from-purple-700 hover:to-indigo-700 transition-colors cursor-pointer"
        >
          <i className="fas fa-plus mr-2"></i>
          Ekle
        </button>
      </form>
      <div>
        {error && (
          <div className="border border-red-300 bg-red-100 text-red-500 mt-2 px-4 py-4 rounded-lg">
            Boş bırakılamaz.
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
