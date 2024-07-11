import { useState } from "react";
import TaskCard from "@/components/TaskCard";

const CompletedTasks = () => {
  const [tasks, setTasks] = useState([]);

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <div className="p-4">
      {tasks.filter(task => task.isCompleted).map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default CompletedTasks;