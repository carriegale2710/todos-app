import { useCategoryListContext } from "../../../context/CategoryListContextProvider";
import type { Category } from "../../../services/categories";
import Header from "../../Header/Header";
import CategoryTag from "../CategoryTag/CategoryTag";
import CategoryForm from "../CategoryForm/CategoryForm";
import classes from "./CategoryList.module.scss";
import Button from "../../Button/Button";
import { useState } from "react";

const CategoryList = () => {
  const { categoryList } = useCategoryListContext();
  const [categoryFormVisible, setcategoryFormVisible] = useState(false);

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
      <div className={classes.form}>
        {categoryFormVisible && (
          <CategoryForm setcategoryFormVisible={setcategoryFormVisible} />
        )}
        <Button
          className={classes.btn}
          onClick={() => setcategoryFormVisible(!categoryFormVisible)}
        >
          {categoryFormVisible ? "X" : "New Category"}
        </Button>
      </div>
    </section>
  );
};

export default CategoryList;
