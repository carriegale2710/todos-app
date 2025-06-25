import { useState } from "react";
import classes from "./AddCategoryWidget.module.scss";
import CategoryForm from "../CategoryForm/CategoryForm";
import Button from "../../Button/Button";

const AddCategoryWidget = () => {
  const [categoryFormVisible, setcategoryFormVisible] = useState(false);

  return (
    <div className={classes.form}>
      {categoryFormVisible && (
        <CategoryForm setcategoryFormVisible={setcategoryFormVisible} />
      )}

      <Button
        className={classes.btn}
        onClick={() => setcategoryFormVisible(!categoryFormVisible)}
      >
        {categoryFormVisible ? "X" : "New Category"}
      </Button>
    </div>
  );
};

export default AddCategoryWidget;
