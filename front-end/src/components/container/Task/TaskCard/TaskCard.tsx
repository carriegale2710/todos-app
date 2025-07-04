import { type Task } from "../../../../services/tasks";
import Button from "../../../presentational/Button/Button";
import Icon from "../../../presentational/Icon/Icon";
import EditBar from "../../EditBar/EditBar";
import TaskData from "../TaskData/TaskData";
import TaskName from "../TaskName/TaskName";
import classes from "./TaskCard.module.scss";
import { useState } from "react";

type TaskCardProps = {
  task: Task;
  layoutView: string;
};

const TaskCard = ({ task, layoutView }: TaskCardProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const onClose = () => {
    setIsEditMode(false);
  };

  return (
    <section
      className={layoutView === "Grid" ? classes.cardStyle : classes.listStyle}
    >
      <header className={classes.header}>
        <TaskName task={task} />
      </header>
      {layoutView === "Grid" && <TaskData task={task} />}
      {isEditMode && <EditBar task={task} onClose={onClose} />}
      {!isEditMode && (
        <Button
          altText="Edit"
          className="icon-btn"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          <Icon path="edit" />
        </Button>
      )}
    </section>
  );
};

export default TaskCard;
