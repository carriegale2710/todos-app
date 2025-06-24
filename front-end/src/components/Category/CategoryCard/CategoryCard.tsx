import type { Category } from "../../../services/categories";
import classes from "./CategoryCard.module.scss";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  try {
    if (!category) {
      throw new Error("category is undefined/null");
    }
  } catch (e) {
    console.warn(e);
  }
  return (
    <div className={classes.div}>
      <p>{category?.name}</p>
    </div>
  );
};

export default CategoryCard;
