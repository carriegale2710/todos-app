import { useState } from "react";
import {
  createCategory,
  type NewCategoryData,
} from "../../../../services/categories";
import Button from "../../../presentational/Button/Button";
import { validateCategoryForm } from "./category-validator";
import classes from "./CategoryForm.module.scss";
import { useContext } from "react";
import { CategoryListContext } from "../../../../context/CategoryListContextProvider";

interface CategoryFormProps {
  setcategoryFormVisible?: (visible: boolean) => void;
}

const CategoryForm = ({ setcategoryFormVisible }: CategoryFormProps) => {
  const { categoryList } = useContext(CategoryListContext);

  const defaultCategoryValues: NewCategoryData = {
    name: "",
  };
  const [categoryValues, setCategoryValues] = useState<NewCategoryData>(
    defaultCategoryValues
  );
  const [isValidInput, setIsValidInput] = useState(false);
  const { errors } = validateCategoryForm(categoryValues, categoryList);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryValues((prevValues) => {
      const newValues = {
        ...prevValues,
        [name]: value.trim(), //dueDate isn't a string
      };
      const result = validateCategoryForm(newValues, categoryList);
      setIsValidInput(result.isValid);
      return newValues;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("categoryValues: " + JSON.stringify(categoryValues));

    isValidInput && createCategory(categoryValues);
    //reset values after submission
    setCategoryValues(defaultCategoryValues);
    setIsValidInput(false);
    setcategoryFormVisible && setcategoryFormVisible(false);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.div}>
          <label className={classes.label} htmlFor="nameInput">
            Category Name
          </label>
          <input
            type="text"
            id="nameInput"
            name="name"
            placeholder="Category Name"
            className={classes.input}
            value={categoryValues.name}
            onChange={onInputChange}
          />
        </div>
        {!isValidInput && <p>{errors.name}</p>}
        <Button type="submit" disabled={!isValidInput}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default CategoryForm;
