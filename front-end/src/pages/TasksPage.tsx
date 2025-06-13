import { useEffect, useState } from "react";
import { getAllTasks, type Task } from "../services/tasks";
import TaskCard from "../components/TaskCard/TaskCard";

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getAllTasks()
      .then((result) => {
        console.log(result, " tasks from API");
        setTasks(result);
      })
      .catch(console.warn);
  }, []);

  return (
    <div>
      {tasks.map((task: Task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
    </div>
  );
};

export default TasksPage;
