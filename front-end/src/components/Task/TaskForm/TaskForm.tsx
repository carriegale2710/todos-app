import { useState } from "react";
import { useCategoryListContext } from "../../../context/CategoryListContextProvider";
import Button from "../../Button/Button";
import classes from "./TaskForm.module.scss";
import { createNewTask, type NewTaskData } from "../../../services/tasks";
import Header from "../../Header/Header";

const TaskForm = ({ onClose }: { onClose?: () => void }) => {
  const { categoryList } = useCategoryListContext();

  const defaultTaskValues: NewTaskData = {
    name: "",
    dueDate: new Date(),
    categories: [],
    isCompleted: false,
    isArchived: false,
  };

  const [taskValues, setTaskValues] = useState(defaultTaskValues);
  const [selectedCategory, setSelectedCategory] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskValues({
      ...taskValues,
      [name]: name === "dueDate" ? new Date(value) : value, //dueDate isn't a string
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
    console.log(taskValues);
    createNewTask(taskValues);

    //reset values after submission
    setTaskValues(defaultTaskValues);
  };

  return (
    <section className={classes.modal}>
      <div className={classes.modal_content}>
        <Header heading="Create New Task" />

        <form className={classes.form} onSubmit={handleSubmit}>
          <label htmlFor="nameInput">Task Name</label>
          <input
            type="text"
            id="nameInput"
            name="name"
            placeholder="Task Name"
            onChange={onInputChange}
          />
          <br />

          <label htmlFor="dueDateInput">Due Date</label>
          {/* //todo - use date picker library later on? */}
          <input
            type="date"
            id="dueDateInput"
            name="dueDate"
            placeholder="DD-MM-YYYY"
            onChange={onInputChange}
          />
          <br />

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
          <br />

          <Button type="submit">Create</Button>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </form>
      </div>
    </section>
  );
};

export default TaskForm;
