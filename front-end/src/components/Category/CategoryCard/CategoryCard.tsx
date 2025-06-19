import type { Category } from "../../../services/tasks";
import classes from "./CategoryCard.module.scss";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className={classes.div}>
      <p>{category.name}</p>
    </div>
  );
};

export default CategoryCard;
