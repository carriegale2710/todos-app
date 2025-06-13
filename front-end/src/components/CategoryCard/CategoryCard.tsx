import type { Category } from "../../services/tasks";

interface CategoryCardProps {
  Category: Category;
}

const CategoryCard = ({ Category }: CategoryCardProps) => {
  return (
    <div>
      <h2>{Category.name}</h2>
    </div>
  );
};

export default CategoryCard;
