import { useState } from "react";
import type { Category } from "../../../../services/categories";
import Button from "../../../presentational/Button/Button";

interface CategoryTagProps {
  category: Category;
}

const CategoryTag = ({ category }: CategoryTagProps) => {
  const [hoverOn, setHoverOn] = useState(false);

  return (
    category && (
      <Button
        variants={["tag"]}
        onMouseEnter={() => setHoverOn(true)}
        onMouseLeave={() => setHoverOn(false)}
      >
        {hoverOn ? "Edit" : `${category?.name}`}
      </Button>
    )
  );
};

export default CategoryTag;
