import { Link } from "react-router-dom";
import type { Task } from "../services/tasks";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div>
      <Link to={`/tasks/${task.id}`}>
        <h2>{task.name}</h2>
      </Link>
      <p>{task.dueDate.toISOString()}</p>
    </div>
  );
};

export default TaskCard;
