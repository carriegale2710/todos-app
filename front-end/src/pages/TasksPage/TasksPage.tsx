import { useContext } from "react";
import TaskList from "../../components/Task/TaskList/TaskList";
import CategoryList from "../../components/Category/CategoryList/CategoryList";
import { TaskListContext } from "../../context/TaskListContextProvider";
import { CategoryListContext } from "../../context/CategoryListContextProvider";
import classes from "./TasksPage.module.scss";

const TasksPage = () => {
  // const { taskList } = useContext(TaskListContext);
  const taskList = [];
  // const { categoryList } = useContext(CategoryListContext);
  const categoryList = [];

  return (
    <section className={classes.page}>
      <p>Tasks: {taskList.length}</p>
      <p>Categories: {categoryList.length}</p>
      {categoryList.length !== 0 && <CategoryList />}
      {taskList.length !== 0 ? (
        <TaskList />
      ) : (
        <div className={classes.message}>
          <h3>You have no tasks yet! Add some :)</h3>
        </div>
      )}
    </section>
  );
};

export default TasksPage;
