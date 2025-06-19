import CategoryCard from "../CategoryCard/CategoryCard";
import classes from "./CategoryList.module.scss";

interface Category {
  id: number;
  name: string;
}

interface CategoryListProps {
  categoryList: Category[];
}

const CategoryList = ({ categoryList }: CategoryListProps) => {
  return (
    <section className={classes.categories}>
      <p>Categories:</p>
      {categoryList.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </section>
  );
};

export default CategoryList;
