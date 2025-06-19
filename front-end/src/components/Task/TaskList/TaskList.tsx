import { useTaskListContext } from "../../../context/TaskListContextProvider";
import type { Task } from "../../../services/tasks";
import Header from "../../Header/Header";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
  const { taskList } = useTaskListContext();

  return (
    <section>
      <Header homeHeading="Today's Tasks" />
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
