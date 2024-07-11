import { useState } from "react";
import TaskCard from "@/components/TaskCard";
import TaskModal from "@/components/TaskModal";
import { Button } from "@/components/ui/button";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, isCompleted: false }]);
  };

  const handleEditTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsModalOpen(true)}>Add Task</Button>
      </div>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={(taskId) => {
            setCurrentTask(tasks.find(task => task.id === taskId));
            setIsModalOpen(true);
          }}
          onDelete={handleDeleteTask}
          onToggleComplete={handleToggleComplete}
        />
      ))}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCurrentTask(null);
        }}
        onSave={currentTask ? handleEditTask : handleAddTask}
        task={currentTask}
      />
    </div>
  );
};

export default AllTasks;