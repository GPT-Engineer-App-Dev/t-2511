import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleToggleComplete = () => {
    setIsCompleted(!isCompleted);
    onToggleComplete(task.id);
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Status: {isCompleted ? "Completed" : "Pending"}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => onEdit(task.id)}>Edit</Button>
        <Button variant="destructive" onClick={() => onDelete(task.id)}>Delete</Button>
        <Button variant="secondary" onClick={handleToggleComplete}>
          {isCompleted ? "Mark as Pending" : "Mark as Completed"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;