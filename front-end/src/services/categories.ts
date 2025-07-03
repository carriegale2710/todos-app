export interface Category {
  id: number;
  name: string;
}

export interface NewCategoryData {
  name: string;
}

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch("http://localhost:8080/categories");
  if (!response.ok) {
    throw new Error("Could not fetch categories");
  }
  const categories = await response.json();
  return categories;
};

export const fetchCategoryById = async (id: string): Promise<Category> => {
  const response = await fetch("http://localhost:8080/categories/" + id);
  if (!response.ok) {
    throw new Error("Could not fetch category with id " + id);
  }
  const category = await response.json();
  return category;
};

//NOTE - CREATE

export const createNewCategory = async (
  newCategoryData: NewCategoryData
): Promise<Category[]> => {
  console.log("CategoryData received in DB: ", newCategoryData);
  const response = await fetch("http://localhost:8080/categories", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCategoryData),
  });
  if (!response.ok) {
    throw new Error("Could not create new Category");
  }
  const Category = await response.json();
  console.log("New Category created in DB: ", Category);

  return Category;
};
