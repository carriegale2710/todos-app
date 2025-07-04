import classes from "./TaskList.module.scss";
import type { Task } from "../../../services/tasks";
import TaskCard from "../../container/Task/TaskCard/TaskCard";

type TaskListProps = {
  taskList: Task[];
  layoutView: string;
};

const TaskList = ({ taskList, layoutView }: TaskListProps) => {
  return (
    <section className={layoutView === "Grid" ? classes.grid : classes.list}>
      {taskList.length === 0 ? (
        <p>You have no tasks yet!</p>
      ) : (
        taskList.map((task: Task) => {
          return (
            !task.isArchived && (
              <TaskCard layoutView={layoutView} task={task} key={task.id} />
            )
          );
        })
      )}
    </section>
  );
};

export default TaskList;
