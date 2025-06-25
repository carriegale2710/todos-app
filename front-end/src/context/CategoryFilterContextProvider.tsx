import {
  useState,
  createContext,
  type PropsWithChildren,
  useContext,
} from "react";
import { type Category } from "../services/categories";

interface CategoryFilterContextType {
  categoryFilter: Category[];
  setCategoryFilter: React.Dispatch<React.SetStateAction<Category[]>>;
}

export const CategoryFilterContext = createContext<CategoryFilterContextType>({
  categoryFilter: [],
  setCategoryFilter: () => {},
});

const CategoryFilterContextProvider = ({ children }: PropsWithChildren) => {
  const [categoryFilter, setCategoryFilter] = useState<Category[]>([]);

  return (
    <CategoryFilterContext.Provider
      value={{ categoryFilter, setCategoryFilter }}
    >
      {children}
    </CategoryFilterContext.Provider>
  );
};

export default CategoryFilterContextProvider;

//NOTE - CUSTOM HOOK
export function useCategoryFilterContext() {
  const context = useContext(CategoryFilterContext);
  if (!context) {
    throw new Error(
      "useCategoryFilterContext must be used within a CategoryFilterContextProvider"
    );
  }
  return context;
}
