import { useState } from "react";
import { useCategoryListContext } from "../../../../context/CategoryListContextProvider";
import Button from "../../../presentational/Button/Button";
import classes from "./TaskForm.module.scss";
import { type NewTaskData } from "../../../../services/tasks";
import { useTasks } from "../../../../hooks/useTasks";
import { validateTaskForm } from "./task-validator";

const TaskForm = () => {
  const { categoryList } = useCategoryListContext();

  const defaultTaskValues: NewTaskData = {
    name: "",
    dueDate: new Date(),
    categories: [],
    isCompleted: false,
    isArchived: false,
  };

  const [taskValues, setTaskValues] = useState<NewTaskData>(defaultTaskValues);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const { errors } = validateTaskForm(taskValues);
  const { addTask } = useTasks();
  const [showMessage, setShowMessage] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskValues((prevValues) => {
      const newValues = {
        ...prevValues,
        [name]: name === "dueDate" ? new Date(value) : value, //dueDate isn't a string
      };
      const result = validateTaskForm(newValues);
      setIsValidInput(result.isValid);
      return newValues;
    });
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedCategory(value);
    const category = [value];
    setTaskValues({ ...taskValues, [name]: category });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("taskValues: " + JSON.stringify(taskValues));
    isValidInput && addTask(taskValues);
    //reset values after submission
    setTaskValues(defaultTaskValues);
    setSelectedCategory("");
    setIsValidInput(false);
  };

  return (
    <section>
      <div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <label htmlFor="nameInput">Task Name</label>
          <input
            type="text"
            id="nameInput"
            name="name"
            placeholder="Task Name"
            onChange={onInputChange}
          />
          <label htmlFor="dueDateInput">Due Date</label>
          <input
            type="date"
            id="dueDateInput"
            name="dueDate"
            placeholder="DD-MM-YYYY"
            onChange={onInputChange}
          />
          <label htmlFor="categorySelect">Category</label>
          <select
            id="categorySelect"
            name="categories"
            value={selectedCategory}
            onChange={onSelectChange}
          >
            <option value={""} disabled selected>
              Select
            </option>
            {categoryList.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {!isValidInput && <p className={classes.errors}>{errors.name}</p>}
          {showMessage && <p>Task added!</p>}
          <Button
            type="submit"
            disabled={!isValidInput}
            onClick={() => setShowMessage(true)}
          >
            Create
          </Button>
        </form>
      </div>
    </section>
  );
};

export default TaskForm;
