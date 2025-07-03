import { useEffect, useState } from "react";
import { createNewCategory, fetchCategories } from "../services/categories";
import type { NewCategoryData } from "../services/categories";
import { useCategoryListContext } from "../context/CategoryListContextProvider";
import { wrapAsync } from "../utils/wrapAsync";

export function useCategories() {
  const { categoryList, setCategoryList } = useCategoryListContext();
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("PENDING");

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
  return {
    categoryList,
    setCategoryList,
    addCategory,
    error,
    fetchStatus,
  };
}
