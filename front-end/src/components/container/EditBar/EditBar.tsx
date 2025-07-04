import Button from "../../presentational/Button/Button";
import classes from "./EditBar.module.scss";
import {
  deleteTaskById,
  duplicateTask,
  type Task,
} from "../../../services/tasks";
import Icon from "../../presentational/Icon/Icon";

type EditBarProps = {
  task: Task;
  onClose: () => void;
};

const EditBar = ({ task, onClose }: EditBarProps) => {
  const handleDuplicate = () => {
    duplicateTask(task);
    onClose();
  };

  //todo -  call updateTask() from services  - update isArchived boolean in DB (task.isArchived = true)
  const handleDelete = () => {
    console.log("deleted button clicked");
    deleteTaskById(task.id);
    onClose();
  };

  return (
    <div className={classes.editBar}>
      <Button altText="Duplicate" onClick={handleDuplicate}>
        <Icon path="duplicate" />
      </Button>
      <Button altText="Delete" onClick={handleDelete}>
        <Icon path="delete" />
      </Button>
      <Button altText="Close" className="icon-btn" onClick={onClose}>
        <Icon path="close" />
      </Button>
    </div>
  );
};

export default EditBar;
