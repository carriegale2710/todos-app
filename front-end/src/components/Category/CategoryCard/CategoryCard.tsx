import type { Category } from "../../../services/tasks";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div>
      <p>{category.name}</p>
    </div>
  );
};

export default CategoryCard;
