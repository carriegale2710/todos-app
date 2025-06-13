import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTaskById, type Task } from "../services/tasks";

const TaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if (id) getTaskById(id).then(setTask).catch(console.warn);
  }, [id]);

  console.log(task);

  if (!task) {
    return;
  }

  return (
    <div>
      <h2>{task.name}</h2>
      <p>
        Due on {task.dueDate.toString()},
        {/* {task.dueDate.getDate()}/{task.dueDate.getMonth()}/{task.dueDate.getFullYear()} */}
      </p>
      <p>Completed: {task.isCompleted}</p>
    </div>
  );
};

export default TaskPage;
