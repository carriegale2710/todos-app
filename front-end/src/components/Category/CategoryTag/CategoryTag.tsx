import { useState } from "react";
import type { Category } from "../../../services/categories";
import Button from "../../Button/Button";

interface CategoryTagProps {
  category: Category;
}

const CategoryTag = ({ category }: CategoryTagProps) => {
  const [hoverDisplay, setHoverDisplay] = useState(`${category?.name}`);
  const handleHover = () => {
    setHoverDisplay("Edit");
  };
  return (
    category && (
      <Button variants={["btn_tag"]} onHover={() => handleHover}>
        {hoverDisplay}
      </Button>
    )
  );
};

export default CategoryTag;
