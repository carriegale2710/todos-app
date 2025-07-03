import { useState } from "react";
import type { Category } from "../../../../services/categories";
import Button from "../../../presentational/Button/Button";
import classes from "./CategoryList.module.scss";

interface CategoryTagProps {
  category: Category;
}

const CategoryTag = ({ category }: CategoryTagProps) => {
  const [hoverOn, setHoverOn] = useState(false);

  return (
    <div className={classes.category}>
      <p>Category: </p>
      {category && (
        <Button
          variants={["tag"]}
          onMouseEnter={() => setHoverOn(true)}
          onMouseLeave={() => setHoverOn(false)}
        >
          {hoverOn ? "Edit" : `${category?.name}`}
        </Button>
      )}
    </div>
  );
};

export default CategoryTag;
