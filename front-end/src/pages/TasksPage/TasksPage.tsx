import { useContext } from "react";
import TaskList from "../../components/Task/TaskList/TaskList";
import CategoryList from "../../components/Category/CategoryList/CategoryList";
import { TaskListContext } from "../../context/TaskListContextProvider";
import { CategoryListContext } from "../../context/CategoryListContextProvider";
import classes from "./TasksPage.module.scss";
import TaskForm from "../../components/Task/TaskForm/TaskForm";

const TasksPage = () => {
  const { taskList } = useContext(TaskListContext);
  const { categoryList } = useContext(CategoryListContext);

  return (
    <section className={classes.page}>
      <div className={classes.wrapper_row}>
        <p>Tasks: {taskList.length}</p>
        <p>Categories: {categoryList.length}</p>
      </div>
      {/* <button>Create New Task</button> //TODO - this should open a modal with TaskForm component*/}
      <TaskForm />
      {categoryList.length !== 0 && <CategoryList />}
      {taskList.length !== 0 ? (
        <TaskList />
      ) : (
        <div className={classes.message}>
          <h3>You have no tasks yet!</h3>
        </div>
      )}
    </section>
  );
};

export default TasksPage;
