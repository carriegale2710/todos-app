import type { Task } from "../../../services/tasks";
import Button from "../../Button/Button";
import CategoryCard from "../../Category/CategoryCard/CategoryCard";
import classes from "./TaskCard.module.scss";

import { duplicateTask } from "../../../services/tasks";

import check_box_outline_blank from "../../../assets/icons/check_box_outline_blank.svg";
import check_box_checked from "../../../assets/icons/check_box.svg";
import { useState } from "react";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  //TODO - add useEffect or useState

  const [isCompleted, setIsCompleted] = useState(false);

  const checkboxStyle = !isCompleted
    ? check_box_outline_blank
    : check_box_checked;

  const taskNameStyle = isCompleted ? classes.strike : "";

  const dueDateDisplay = task.dueDate
    .toString()
    .slice(0, 10)
    .split("-")
    .join("/");

  //SECTION - BUTTON HANDLERS

  const handleCheckbox = () => {
    setIsCompleted(!isCompleted);
    //todo  - call updateTask() from services to update boolean in DB (isCompleted = !isCompleted)
    console.log(
      `Successfully updated task: "${task.name}" to isCompleted: ${task.isCompleted}`
    );
  };

  const handleDelete = () => {
    console.log("deleted button clicked");
    // //todo call on backend - update isArchived boolean in DB (task.isArchived = true)
  };

  const handleDuplicate = () => {
    console.log(
      "duplicate button clicked, copied data: " + JSON.stringify(task, null, 2)
    );
    //todo - like add new task + copy data -> POST to DB
    duplicateTask(task);
  };

  return (
    <section className={classes.container}>
      <div className={classes.container_row}>
        <Button onClick={handleCheckbox} className={classes.checkbox}>
          <img src={checkboxStyle} />
        </Button>

        <h3 className={taskNameStyle}>{task.name}</h3>
      </div>

      <div className={classes.taskData}>
        <p>Task id: {task.id}</p>
        <p>Due on {dueDateDisplay}</p>
        <p>Completed: {task?.isCompleted.toString() || ""}</p>
        <p>isArchived: {task?.isArchived.toString() || ""}</p>
        <CategoryCard category={task.categories[0]} />
      </div>

      <div className={classes.container_row}>
        <Button onClick={handleDuplicate}>Duplicate</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </section>
  );
};

export default TaskCard;
