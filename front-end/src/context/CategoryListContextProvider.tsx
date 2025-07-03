import {
  useState,
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { fetchCategories, type Category } from "../services/categories";
import { useCategories } from "../hooks/useCategories";
import { wrapAsync } from "../utils/wrapAsync";

interface CategoryListContextType {
  categoryList: Category[];
  setCategoryList: React.Dispatch<React.SetStateAction<Category[]>>;
}

export const CategoryListContext = createContext<CategoryListContextType>({
  categoryList: [],
  setCategoryList: () => {},
});

const CategoryListContextProvider = ({ children }: PropsWithChildren) => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("PENDING");

  // Fetch all Categories on mount
  useEffect(() => {
    wrapAsync(fetchCategories, setFetchStatus, setError).then(setCategoryList);
  }, []);

  return (
    <CategoryListContext.Provider value={{ categoryList, setCategoryList }}>
      {children}
    </CategoryListContext.Provider>
  );
};

export default CategoryListContextProvider;

//NOTE - CUSTOM HOOK
export function useCategoryListContext() {
  const context = useContext(CategoryListContext);
  if (!context) {
    throw new Error(
      "useCategoryListContext must be used within a CategoryListContextProvider"
    );
  }
  return context;
}
