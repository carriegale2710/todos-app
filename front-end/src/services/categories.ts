export interface Category {
  id: number;
  name: string;
}

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetch("http://localhost:8080/categories");
  if (!response.ok) {
    throw new Error("Could not fetch categories");
  }
  const categories = await response.json();
  return categories;
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const response = await fetch("http://localhost:8080/categories/" + id);
  if (!response.ok) {
    throw new Error("Could not fetch category with id " + id);
  }
  const category = await response.json();
  return category;
};
