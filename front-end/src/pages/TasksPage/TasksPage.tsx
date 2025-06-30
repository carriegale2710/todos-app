import { useContext, useState } from "react";
import TaskList from "../../components/Task/TaskList/TaskList";
import CategoryList from "../../components/Category/CategoryList/CategoryList";
import { TaskListContext } from "../../context/TaskListContextProvider";
import { CategoryListContext } from "../../context/CategoryListContextProvider";
import classes from "./TasksPage.module.scss";
import TaskForm from "../../components/Task/TaskForm/TaskForm";
import Button from "../../components/Button/Button";

const TasksPage = () => {
  const { taskList } = useContext(TaskListContext);
  const { categoryList } = useContext(CategoryListContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={classes.page}>
      <div className={classes.wrapper_row}>
        <p>Tasks: {taskList.length}</p>
        <p>Categories: {categoryList.length}</p>
      </div>
      <Button onClick={() => setShowModal(true)}>Add new Task</Button>
      {showModal && <TaskForm onClose={() => setShowModal(false)} />}
      {categoryList.length !== 0 && <CategoryList />}
      <TaskList />
    </section>
  );
};

export default TasksPage;
