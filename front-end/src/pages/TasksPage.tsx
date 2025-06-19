import { useEffect, useState } from "react";
import { getAllTasks, type Task } from "../services/tasks";
import { type Category } from "../services/tasks";
import TaskList from "../components/Task/TaskCard/TaskList/TaskList";
import { getAllCategories } from "../services/categories";

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllTasks()
      .then((result) => {
        console.log(result, "All tasks from API: ");
        setTasks(result);
      })
      .catch(console.warn);
  }, []);

  useEffect(() => {
    getAllCategories()
      .then((result) => {
        console.log(result, "All Categories from API: ");
        setCategories(result);
      })
      .catch(console.warn);
  }, []);

  return (
    <div>
      <p>Tasks: {tasks.length}</p>
      <p>Categories: {categories.length}</p>
      {/* {tasks.map((task: Task) => {
        return <TaskCard task={task} key={task.id} />;
      })} */}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TasksPage;
