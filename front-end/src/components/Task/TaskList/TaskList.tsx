import { useTaskListContext } from "../../../context/TaskListContextProvider";
import type { Task } from "../../../services/tasks";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
  const { taskList } = useTaskListContext();
  return (
    <div>
      {taskList.map((task: Task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
    </div>
  );
};

export default TaskList;
