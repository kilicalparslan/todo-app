import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TodoItem from "./TodoItem";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";

const TodoList = ({ tasks, setTasks }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
    >
      <div className="bg-white rounded-lg shadow-sm">
        {tasks && tasks.length > 0 ? (
          tasks?.map((item) => (
            <SortableContext
              key={item.id}
              items={tasks}
              strategy={verticalListSortingStrategy}
            >
              <TodoItem item={item} tasks={tasks} setTasks={setTasks} />
            </SortableContext>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            Henüz görev eklenmemiş. Yeni bir görev ekleyerek başlayın!
          </div>
        )}
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
};

export default TodoList;
