import { type Task } from "../../../services/tasks";
import Button from "../../Button/Button";
import CategoryTag from "../../Category/CategoryTag/CategoryTag";
import classes from "./TaskCard.module.scss";

import { useState } from "react";
import { useTasks } from "../../../hooks/useTasks";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const { duplicateTask, removeTask } = useTasks();

  //SECTION - BUTTON HANDLERS

  const handleCheckbox = () => {
    setIsCompleted(!isCompleted);
    //todo  - call updateTask() from services to update boolean in DB (isCompleted = !isCompleted)
    console.log(
      `Successfully updated task: "${task.name}" to isCompleted: ${task.isCompleted}`
    );
  };

  const handleDuplicate = () => {
    duplicateTask(task);
  };

  const handleDelete = () => {
    console.log("deleted button clicked");
    removeTask(task.id);
    //todo -  call updateTask() from services  - update isArchived boolean in DB (task.isArchived = true)
  };

  return (
    <section className={classes.card}>
      <div className={classes.title}>
        <input
          type="checkbox"
          onClick={handleCheckbox}
          className={classes.checkbox}
        />
        <h3 className={isCompleted ? classes.strike : classes.text}>
          {task.name}
        </h3>
      </div>

      {task.dueDate && (
        <p>Due: {task.dueDate.toString().slice(0, 10).split("-").join("/")}</p>
      )}
      <div className={classes.row}>
        <p>Category: </p>
        <CategoryTag category={task.categories[0]} />
      </div>

      <div className={classes.row}>
        <Button onClick={handleDuplicate}>Duplicate</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </section>
  );
};

export default TaskCard;
