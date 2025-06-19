import type { Task } from "../../../services/tasks";
import Button from "../../Button/Button";
import CategoryCard from "../../Category/CategoryCard/CategoryCard";
import classes from "./TaskCard.module.scss";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const handleDelete = () => {
    console.log("deleted button clicked");
    task.isArchived = false; //call backend - update this boolean
  };
  return (
    <section className={classes.container}>
      <h3>{task.name}</h3>
      <div className={classes.taskData}>
        <p>
          Due on {task.dueDate.toString().slice(0, 10).split("-").join("/")}
        </p>
        <p>Completed: {task.isCompleted.toString()}</p>
        <CategoryCard category={task.categories[0]} />
      </div>
      <div className={classes.container_row}>
        <Button onClick={() => handleDelete}>Delete</Button>
        <Button>Duplicate</Button>
      </div>
    </section>
  );
};

export default TaskCard;
