import { useCategoryListContext } from "../../../../context/CategoryListContextProvider";
import type { Category } from "../../../../services/categories";
import Header from "../../../presentational/Header/Header";
import classes from "./CategoryList.module.scss";

const CategoryList = () => {
  const { categoryList } = useCategoryListContext();

  return (
    <section className={classes.wrapper}>
      <Header heading="Categories" className="subheading" />
      {categoryList.map((category: Category) => {
        return <p key={category.id}>{category.name}</p>;
      })}
    </section>
  );
};

export default CategoryList;
