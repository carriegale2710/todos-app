import {
  useState,
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { getAllCategories, type Category } from "../services/categories";

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

  useEffect(() => {
    getAllCategories()
      .then((result) => {
        // console.log("All Categories from API: ", result);
        setCategoryList(result);
        console.log("categoryList updated");
      })
      .catch(console.warn);
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
