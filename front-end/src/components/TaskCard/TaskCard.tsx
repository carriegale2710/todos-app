import type { Task } from "../../services/tasks";
import CategoryCard from "../CategoryCard/CategoryCard";
import classes from "./TaskCard.module.scss";

interface TaskCardProps {
  task: Task;
}
//TODO - display as date only

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <section className={classes.container}>
      <h3>{task.name}</h3>
      <div className={classes.taskData}>
        <p>
          Due on {task.dueDate.toString().slice(0, 10).split("-").join("/")}
        </p>
        <p>Completed: {task.isCompleted.toString()}</p>
        <div className={classes.categories}>
          <p>Categories:</p>
          {task.categories.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskCard;
