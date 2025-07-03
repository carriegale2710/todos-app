import { type Task } from "../../../../services/tasks";
import Button from "../../../presentational/Button/Button";
import EditBar from "../../EditBar/EditBar";
import TaskData from "../TaskData/TaskData";
import TaskName from "../TaskName/TaskName";
import classes from "./TaskCard.module.scss";
import { useState } from "react";

interface TaskCardProps {
  task: Task;
  layoutView: string;
}

const TaskCard = ({ task, layoutView }: TaskCardProps) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <section
      className={layoutView === "Grid" ? classes.cardStyle : classes.listStyle}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <header className={classes.header}>
        <TaskName task={task} />
      </header>
      {layoutView === "Grid" && (hover || clicked) && <TaskData task={task} />}
      {clicked && <EditBar task={task} />}
      {((hover && !clicked) || (!hover && clicked)) && (
        <Button className="icon-btn" onClick={() => setClicked(!clicked)}>
          {!clicked ? "Edit" : "X"}
        </Button>
      )}
    </section>
  );
};

export default TaskCard;
