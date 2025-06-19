import { useTaskListContext } from "../../../context/TaskListContextProvider";
import type { Task } from "../../../services/tasks";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
  const { taskList } = useTaskListContext();

  return (
    <section>
      <h2>Today's Tasks</h2>
      {!taskList || taskList.length == 0 ? (
        <p>Values for TaskList are not found</p>
      ) : (
        taskList.map((task: Task) => {
          return <TaskCard task={task} key={task.id} />;
        })
      )}
    </section>
  );
};

export default TaskList;
