import classes from "./TaskList.module.scss";
import { useTaskListContext } from "../../../context/TaskListContextProvider";
import type { Task } from "../../../services/tasks";
import Header from "../../Header/Header";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
  const { taskList } = useTaskListContext();

  return (
    <section className={classes.taskList}>
      <Header heading="Today's Tasks" />
      <div>
        {!taskList || taskList.length == 0 ? (
          <p>Values for TaskList are not found</p>
        ) : (
          taskList.map((task: Task) => {
            return !task.isArchived && <TaskCard task={task} key={task.id} />;
          })
        )}
      </div>
    </section>
  );
};

export default TaskList;
