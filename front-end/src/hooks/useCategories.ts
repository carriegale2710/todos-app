import { useEffect } from "react";
import { createNewCategory, getAllCategories } from "../services/categories";
import type { NewCategoryData } from "../services/categories";
import { useCategoryListContext } from "../context/CategoryListContextProvider";

export function useCategories() {
  const { categoryList, setCategoryList } = useCategoryListContext();

  // Fetch all Categories on mount
  useEffect(() => {
    getAllCategories()
      .then(setCategoryList)
      .catch((error) => {
        console.error("Failed to fetch Categories:", error);
      });
  }, []);

  // CRUD operations that update state
  const addCategory = async (data: NewCategoryData) => {
    try {
      const newCategory = await createNewCategory(data);
      setCategoryList((prev) => [
        ...prev,
        ...(Array.isArray(newCategory) ? newCategory : [newCategory]),
      ]);
    } catch (error) {
      console.error("Failed to create Category:", error);
      alert(`Failed to create Category: ${error}`);
    }
  };

  return { categoryList, setCategoryList, addCategory };
}
