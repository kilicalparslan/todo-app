import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, setTasks }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {tasks && tasks.length > 0 ? (
        tasks?.map((item, index) => (
          <TodoItem key={index} item={item} tasks={tasks} setTasks={setTasks} />
        ))
      ) : (
        <div className="p-8 text-center text-gray-500">
          Henüz görev eklenmemiş. Yeni bir görev ekleyerek başlayın!
        </div>
      )}
    </div>
  );
};

export default TodoList;
