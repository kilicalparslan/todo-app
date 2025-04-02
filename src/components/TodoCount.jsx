import React from "react";
import ProgressChart from "./ProgressChart";

const TodoCount = ({ completed, total }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium text-gray-800 mb-2">
            Görev Durumu
          </h2>
          <p className="text-gray-600">
            {completed} / {total} görev tamamlandı
          </p>
        </div>
        <ProgressChart completed={completed} total={total} />
      </div>
    </div>
  );
};

export default TodoCount;
