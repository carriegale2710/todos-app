export interface Category {
  id: number;
  name: string;
}

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetch("http://localhost:8080/categories");
  const Categories = await response.json();
  return Categories;
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const response = await fetch("http://localhost:8080/categories/" + id);
  if (!response.ok) {
    throw new Error("Could not fetch data");
  }
  return await response.json();
};
