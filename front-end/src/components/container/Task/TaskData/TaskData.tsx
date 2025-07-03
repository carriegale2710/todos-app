import type { Task } from "../../../../services/tasks";
import CategoryTag from "../../Category/CategoryTag/CategoryTag";
import classes from "./TaskData.module.scss";

const TaskData = ({ task }: { task: Task }) => {
  return (
    <span className={classes.taskData}>
      {task.dueDate && (
        <div className={classes.dueDate}>
          <p>
            Due: {task.dueDate.toString().slice(0, 10).split("-").join("/")}
          </p>
        </div>
      )}
      <CategoryTag category={task.categories[0]} />
    </span>
  );
};

export default TaskData;
