import classes from "./DataSummary.module.scss";
import type { Task } from "../../../services/tasks";
import type { Category } from "../../../services/categories";
import Button from "../../presentational/Button/Button";

type DataSummaryProps = {
  taskList: Task[];
  categoryList: Category[];
};

const DataSummary = ({ taskList, categoryList }: DataSummaryProps) => {
  return (
    <section className={classes.row}>
      <Button>Tasks: {taskList.length}</Button>
      <Button>Categories: {categoryList.length}</Button>
    </section>
  );
};

export default DataSummary;
