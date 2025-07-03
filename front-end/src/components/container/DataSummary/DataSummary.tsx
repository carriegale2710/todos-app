import { useContext } from "react";
import { TaskListContext } from "../../../context/TaskListContextProvider";
import { CategoryListContext } from "../../../context/CategoryListContextProvider";
import classes from "./DataSummary.module.scss";

const DataSummary = () => {
  const { taskList } = useContext(TaskListContext);
  const { categoryList } = useContext(CategoryListContext);
  return (
    <section className={classes.row}>
      <p>Tasks: {taskList.length}</p>
      <p>Categories: {categoryList.length}</p>
    </section>
  );
};

export default DataSummary;
