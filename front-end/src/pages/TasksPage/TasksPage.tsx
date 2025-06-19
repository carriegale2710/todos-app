import { useContext, useEffect, useState } from "react";
import { getAllTasks, type Task } from "../../services/tasks";
import { type Category } from "../../services/tasks";
import TaskList from "../../components/Task/TaskList/TaskList";
import { getAllCategories } from "../../services/categories";
import CategoryList from "../../components/Category/CategoryList/CategoryList";
import classes from "./TasksPage.module.scss";
import { TaskListContext } from "../../context/TaskListContextProvider";

const TasksPage = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const { taskList, setTaskList } = useContext(TaskListContext);

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllTasks()
      .then((result) => {
        console.log(result, "All tasks from API: ");
        setTaskList(result);
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
    <section className={classes.page}>
      <p>Tasks: {taskList.length}</p>
      <p>Categories: {categories.length}</p>
      <CategoryList categoryList={categories} />
      <TaskList />
    </section>
  );
};

export default TasksPage;
