import { type Task } from "../../../services/tasks";
import Button from "../../Button/Button";
import CategoryTag from "../../Category/CategoryTag/CategoryTag";
import classes from "./TaskCard.module.scss";

import check_box_outline_blank from "../../../assets/icons/check_box_outline_blank.svg";
import check_box_checked from "../../../assets/icons/check_box.svg";
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
    <section className={classes.container}>
      <div className={classes.container_row}>
        <Button onClick={handleCheckbox} className={classes.checkbox}>
          <img
            src={!isCompleted ? check_box_outline_blank : check_box_checked}
          />
        </Button>

        <h3 className={isCompleted ? classes.strike : ""}>{task.name}</h3>
      </div>

      <div className={classes.taskData}>
        {task.dueDate && (
          <p>
            Due on: {task.dueDate.toString().slice(0, 10).split("-").join("/")}
          </p>
        )}
        <CategoryTag category={task.categories[0]} />
      </div>

      <div className={classes.container_row}>
        <Button onClick={handleDuplicate}>Duplicate</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </section>
  );
};

export default TaskCard;
