import { useCategoryListContext } from "../../../context/CategoryListContextProvider";
import type { Category } from "../../../services/categories";
import CategoryCard from "../CategoryCard/CategoryCard";
import classes from "./CategoryList.module.scss";

const CategoryList = () => {
  const { categoryList } = useCategoryListContext();

  return (
    <section className={classes.categories}>
      <p>Categories: </p>
      {!categoryList || categoryList.length == 0 ? (
        <p> Values for CategoryList are not found</p>
      ) : (
        categoryList.map((category: Category) => {
          return <CategoryCard category={category} key={category.id} />;
        })
      )}
    </section>
  );
};

export default CategoryList;
