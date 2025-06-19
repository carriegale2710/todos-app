import { useContext, useEffect, useState } from "react";
import { getAllTasks, type Task } from "../../services/tasks";
import { getAllCategories, type Category } from "../../services/categories";
import TaskList from "../../components/Task/TaskList/TaskList";
import CategoryList from "../../components/Category/CategoryList/CategoryList";
import { TaskListContext } from "../../context/TaskListContextProvider";
import { CategoryListContext } from "../../context/CategoryListContextProvider";
import classes from "./TasksPage.module.scss";

const TasksPage = () => {
  const { taskList, setTaskList } = useContext(TaskListContext);
  const { categoryList, setCategoryList } = useContext(CategoryListContext);

  useEffect(() => {
    getAllTasks()
      .then((result) => {
        console.log("All tasks from API: ", result);
        setTaskList(result);
      })
      .catch(console.warn);
  }, []);

  useEffect(() => {
    getAllCategories()
      .then((result) => {
        console.log("All Categories from API: ", result);
        setCategoryList(result);
      })
      .catch(console.warn);
  }, []);

  return (
    <section className={classes.page}>
      <p>Tasks: {taskList.length}</p>
      <p>Categories: {categoryList.length}</p>
      <CategoryList />
      <TaskList />
    </section>
  );
};

export default TasksPage;
