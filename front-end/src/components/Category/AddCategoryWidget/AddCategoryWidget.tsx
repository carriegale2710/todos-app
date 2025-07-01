import { useState } from "react";
import CategoryForm from "../CategoryForm/CategoryForm";
import Button from "../../Button/Button";

const AddCategoryWidget = () => {
  const [categoryFormVisible, setcategoryFormVisible] = useState(false);

  return (
    <div>
      {categoryFormVisible && (
        <CategoryForm setcategoryFormVisible={setcategoryFormVisible} />
      )}

      <Button onClick={() => setcategoryFormVisible(!categoryFormVisible)}>
        {categoryFormVisible ? "X" : "New Category"}
      </Button>
    </div>
  );
};

export default AddCategoryWidget;
