import type { Category } from "../../../services/categories";
import Button from "../../Button/Button";
import classes from "./CategoryTag.module.scss";

interface CategoryTagProps {
  category: Category;
}

const CategoryTag = ({ category }: CategoryTagProps) => {
  return category && <Button className={classes.btn}>{category?.name}</Button>;
};

export default CategoryTag;
