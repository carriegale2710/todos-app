import { Link } from "react-router-dom";
import type { Task } from "../../services/tasks";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div>
      <Link to={`/tasks/${task.id}`}>
        <h2>{task.name}</h2>
      </Link>
      <p>
        Due on {task.dueDate.toString()},
        {/* {task.dueDate.getDate()}/{task.dueDate.getMonth()}/{task.dueDate.getFullYear()} */}
      </p>
      <p>Completed: {task.isCompleted}</p>
      <p>
        Categories:{" "}
        {task.categories.map((category) => category.name.toUpperCase())}
      </p>
    </div>
  );
};

export default TaskCard;
