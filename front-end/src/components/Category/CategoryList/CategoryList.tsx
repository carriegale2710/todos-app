import { useCategoryListContext } from "../../../context/CategoryListContextProvider";
import type { Category } from "../../../services/categories";

import classes from "./CategoryList.module.scss";
import { useCategoryFilterContext } from "../../../context/CategoryFilterContextProvider";
import AddCategoryWidget from "../AddCategoryWidget/AddCategoryWidget";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const { categoryList } = useCategoryListContext();
  const { categoryFilter, setCategoryFilter } = useCategoryFilterContext();
  const [selectedCategory, setSelectedCategory] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
  };

  const taskFilter = () => {
    const category = categoryList.find((c) => c.name === selectedCategory);
    if (!category) {
      setCategoryFilter([]);
    } else {
      categoryFilter.some((c) => c.id === category.id)
        ? setCategoryFilter(categoryFilter.filter((c) => c.id !== category.id)) //turn filter off
        : setCategoryFilter([category]); //turn filter on
    }
  };

  useEffect(() => {
    taskFilter();
  }, [selectedCategory]);

  return (
    <section className={classes.wrapper}>
      <div>
        {categoryList && categoryList.length > 0 && (
          <div className={classes.categories}>
            <label htmlFor="categoryFilter">Filter by category</label>
            <select
              onChange={onChange}
              name="categoryFilter"
              id="categoryFilter"
            >
              <option value="">All</option>
              {categoryList.map((category: Category) => {
                return (
                  <option value={category.name} key={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>
      <AddCategoryWidget />
    </section>
  );
};

export default CategoryList;
