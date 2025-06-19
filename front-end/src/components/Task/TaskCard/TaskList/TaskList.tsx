import type { Task } from "../../../../services/tasks";
import TaskCard from "../TaskCard";

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {tasks.map((task: Task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
    </div>
  );
};

export default TaskList;
