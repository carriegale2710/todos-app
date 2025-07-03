import type { NewTaskData } from "../../../../services/tasks";

export const validateTaskForm = (taskValues: NewTaskData) => {
  let isValid = true;
  const errors: { name: string; dueDate: string; categories: string } = {
    name: "",
    dueDate: "",
    categories: "",
  };
  if (taskValues.name.trim() == "" || taskValues.name == null) {
    isValid = false;
    errors.name = "Task name must not be empty";
  }

  if (taskValues.name.length > 20) {
    isValid = false;
    errors.name = "Task name must not be longer than 20 characters";
  }

  //TODO - can add more validations here if needed

  return { isValid, errors };
};
