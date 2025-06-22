import type { Task } from "../../../services/tasks";
import Button from "../../Button/Button";
import CategoryCard from "../../Category/CategoryCard/CategoryCard";
import classes from "./TaskCard.module.scss";

import check_box_outline_blank from "../../../assets/icons/check_box_outline_blank.svg";
import check_box_checked from "../../../assets/icons/check_box.svg";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const handleIsCompleted = () => {
    console.log("checkbox clicked");
    //todo - update isCompleted boolean in DB
  };

  const handleDelete = () => {
    console.log("deleted button clicked");
    // //todo call on backend - update isArchived boolean in DB
    // task.isArchived = false;
  };

  const handleDuplicate = () => {
    console.log("duplicate button clicked");
    //todo - like add new task + copy data -> POST to DB
  };

  return (
    <section className={classes.container}>
      <div className={classes.container_row}>
        <Button
          onClick={() => handleIsCompleted}
          // backgroundColor="transparent"
          className={classes.checkbox}
        >
          <img
            src={
              !task.isCompleted ? check_box_outline_blank : check_box_checked
            }
            alt="checkbox"
          />
        </Button>
        <h3 className={task.isCompleted ? classes.strike : ""}>{task.name}</h3>
      </div>
      <div className={classes.taskData}>
        <p>
          Due on {task.dueDate.toString().slice(0, 10).split("-").join("/")}
        </p>
        <p>Completed: {task.isCompleted.toString()}</p>
        <CategoryCard category={task.categories[0]} />
      </div>
      <div className={classes.container_row}>
        <Button onClick={() => handleDelete}>Delete</Button>
        <Button onClick={() => handleDuplicate}>Duplicate</Button>
      </div>
    </section>
  );
};

export default TaskCard;
