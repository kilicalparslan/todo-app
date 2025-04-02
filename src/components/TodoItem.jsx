import React from "react";
import { useState, useRef, useEffect } from "react";

const TodoItem = ({ item, setTasks }) => {
  const [editing, setEditing] = useState(false);
  const input = useRef(null);

  const handleEdit = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing && input.current) {
      input.current.focus();
      input.current.setSelectionRange(
        input.current.value.length,
        input.current.value.length
      );
    }
  }, [editing]);
  const handleInputSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };
  const handleInputBlur = () => {
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === item.id ? { ...task, title: e.target.value } : task
      )
    );
  };

  const toggleComplete = () => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === item.id
          ? { ...task, is_completed: !task.is_completed }
          : task
      )
    );
  };
  const handleDelete = () => {
    setTasks((prev) => prev.filter((task) => task.id !== item.id));
  };
  return (
    <div
      className="flex items-center gap-4 p-4 border-b border-gray-100 last:border-0"
      id={item?.id}
    >
      <button
        onClick={toggleComplete}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 cursor-pointer hover:border-purple-400 ${
          item.is_completed
            ? "bg-purple-500 border-purple-500"
            : "border-gray-300"
        }`}
      >
        {item.is_completed && <i className="fas fa-check text-white text-sm" />}
      </button>

      {editing ? (
        <div className="flex-1 flex gap-2">
          <input
            ref={input}
            defaultValue={item?.title}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            type="text"
            className="flex-1 px-3 py-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            autoFocus
          />
          <button
            onClick={handleInputSubmit}
            className="px-3 py-1 bg-purple-500 text-white cursor-pointer rounded hover:bg-purple-600 transition-colors"
          >
            <i className="fas fa-check" />
          </button>
        </div>
      ) : (
        <span
          onClick={toggleComplete}
          className={`flex-1 ${
            item.is_completed ? "line-through text-gray-400" : "text-gray-700"
          } cursor-pointer hover:text-purple-600 transition-colors`}
        >
          {item?.title}
        </span>
      )}

      {!editing && (
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="text-gray-400 hover:text-purple-500 transition-colors cursor-pointer"
          >
            <i className="fas fa-edit" />
          </button>
          <button
            onClick={handleDelete}
            className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
          >
            <i className="fas fa-trash" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
