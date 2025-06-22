import { useContext } from "react";
import TaskList from "../../components/Task/TaskList/TaskList";
import CategoryList from "../../components/Category/CategoryList/CategoryList";
import { TaskListContext } from "../../context/TaskListContextProvider";
import { CategoryListContext } from "../../context/CategoryListContextProvider";
import classes from "./TasksPage.module.scss";

const TasksPage = () => {
  const { taskList } = useContext(TaskListContext);
  const { categoryList } = useContext(CategoryListContext);

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
