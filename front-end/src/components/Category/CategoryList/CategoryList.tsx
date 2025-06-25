import { useCategoryListContext } from "../../../context/CategoryListContextProvider";
import type { Category } from "../../../services/categories";
import Header from "../../Header/Header";
import CategoryTag from "../CategoryTag/CategoryTag";
import classes from "./CategoryList.module.scss";
import { useCategoryFilterContext } from "../../../context/CategoryFilterContextProvider";
import AddCategoryWidget from "../AddCategoryWidget/AddCategoryWidget";

const CategoryList = () => {
  const { categoryList } = useCategoryListContext();
  const { categoryFilter } = useCategoryFilterContext();

  return (
    <section className={classes.wrapper}>
      <Header heading="Categories" />
      {categoryFilter.length > 0 && (
        <p>Filters: {categoryFilter.map((c) => `${c.name}  `)}</p>
      )}

      <div className={classes.categories}>
        {!categoryList || categoryList.length == 0 ? (
          <p> Values for CategoryList are not found</p>
        ) : (
          categoryList.map((category: Category) => {
            return <CategoryTag category={category} key={category.id} />;
          })
        )}
      </div>

      <AddCategoryWidget />
    </section>
  );
};

export default CategoryList;
