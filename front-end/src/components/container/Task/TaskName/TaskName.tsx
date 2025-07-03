import { useState } from "react";
import classes from "./TaskName.module.scss";
import type { Task } from "../../../../services/tasks";

interface TaskCardProps {
  task: Task;
}

const TaskName = ({ task }: TaskCardProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckbox = () => {
    setIsCompleted(!isCompleted);
    //todo  - call updateTask() from services to update boolean in DB (isCompleted = !isCompleted)
    console.log(
      `Successfully updated task: "${task.name}" to isCompleted: ${task.isCompleted}`
    );
  };

  return (
    <div className={classes.title}>
      <input
        type="checkbox"
        onClick={handleCheckbox}
        className={classes.header_checkbox}
      />
      <h3
        className={
          !isCompleted ? classes.title_taskName : classes.title_taskName_strike
        }
      >
        {task.name}
      </h3>
    </div>
  );
};

export default TaskName;
