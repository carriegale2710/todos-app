import { useCategoryListContext } from "../../../context/CategoryListContextProvider";
import type { Category } from "../../../services/categories";
import Header from "../../Header/Header";
import CategoryTag from "../CategoryTag/CategoryTag";
import classes from "./CategoryList.module.scss";

const CategoryList = () => {
  const { categoryList } = useCategoryListContext();

  return (
    <section>
      <Header heading="Categories" />
      <div className={classes.categories}>
        {!categoryList || categoryList.length == 0 ? (
          <p> Values for CategoryList are not found</p>
        ) : (
          categoryList.map((category: Category) => {
            return <CategoryTag category={category} key={category.id} />;
          })
        )}
      </div>
    </section>
  );
};

export default CategoryList;
