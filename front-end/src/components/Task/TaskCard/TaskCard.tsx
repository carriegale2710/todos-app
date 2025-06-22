import type { Task } from "../../../services/tasks";
import Button from "../../Button/Button";
import CategoryCard from "../../Category/CategoryCard/CategoryCard";
import classes from "./TaskCard.module.scss";

import {
  handleIsCompleted,
  handleDelete,
  handleDuplicate,
} from "../../../services/tasks";

import check_box_outline_blank from "../../../assets/icons/check_box_outline_blank.svg";
import check_box_checked from "../../../assets/icons/check_box.svg";
import { useContext } from "react";
import { TaskListContext } from "../../../context/TaskListContextProvider";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const checkboxStyle = !task.isCompleted
    ? check_box_outline_blank
    : check_box_checked;

  const taskNameStyle = task.isCompleted ? classes.strike : "";

  const dueDateDisplay = task.dueDate
    .toString()
    .slice(0, 10)
    .split("-")
    .join("/");

  return (
    <section className={classes.container}>
      <div className={classes.container_row}>
        <Button
          onClick={() => handleIsCompleted(task.id)}
          className={classes.checkbox}
        >
          <img src={checkboxStyle} />
        </Button>

        <h3 className={taskNameStyle}>{task.name}</h3>
      </div>

      <div className={classes.taskData}>
        <p>Due on {dueDateDisplay}</p>
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
