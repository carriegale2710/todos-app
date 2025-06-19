import type { Task } from "../../../services/tasks";
import Button from "../../Button/Button";
import CategoryCard from "../../Category/CategoryCard/CategoryCard";
import CategoryList from "../../Category/CategoryList/CategoryList";
import classes from "./TaskCard.module.scss";

interface TaskCardProps {
  task: Task;
}
//TODO - display as date only

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <section className={classes.container}>
      <button></button>
      <h3>{task.name}</h3>
      <div className={classes.taskData}>
        <p>
          Due on {task.dueDate.toString().slice(0, 10).split("-").join("/")}
        </p>
        <p>Completed: {task.isCompleted.toString()}</p>
        <CategoryList categoryList={task.categories} />
      </div>
      <div className={classes.container_row}>
        <Button>Delete</Button>
        <Button>Duplicate</Button>
      </div>
    </section>
  );
};

export default TaskCard;
