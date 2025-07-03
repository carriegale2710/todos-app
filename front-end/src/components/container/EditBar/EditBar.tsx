import Button from "../../presentational/Button/Button";
import classes from "./EditBar.module.scss";
import { useTasks } from "../../../hooks/useTasks";
import type { Task } from "../../../services/tasks";

const EditBar = ({ task }: { task: Task }) => {
  const { duplicateTask, removeTask } = useTasks();
  const handleDuplicate = () => {
    duplicateTask(task);
  };

  const handleDelete = () => {
    console.log("deleted button clicked");
    removeTask(task.id);
    //todo -  call updateTask() from services  - update isArchived boolean in DB (task.isArchived = true)
  };

  return (
    <div className={classes.editBar}>
      <Button onClick={handleDuplicate}>Duplicate</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default EditBar;
