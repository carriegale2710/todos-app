import { useContext } from "react";
import type { Category } from "../../../services/categories";
import Button from "../../Button/Button";
import classes from "./CategoryTag.module.scss";
import { CategoryFilterContext } from "../../../context/CategoryFilterContextProvider";

interface CategoryTagProps {
  category: Category;
}

const CategoryTag = ({ category }: CategoryTagProps) => {
  const { categoryFilter, setCategoryFilter } = useContext(
    CategoryFilterContext
  );

  const taskFilter = () => {
    categoryFilter.some((c) => c.id === category.id)
      ? setCategoryFilter(categoryFilter.filter((c) => c.id !== category.id)) //turn filter off
      : setCategoryFilter([...categoryFilter, category]); //turn filter on
  };

  return (
    category && (
      <Button className={classes.btn} onClick={taskFilter}>
        {category?.name}
      </Button>
    )
  );
};

export default CategoryTag;
