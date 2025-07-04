//SECTION - INTERFACES

export interface Category {
  id: number;
  name: string;
}

export interface NewCategoryData {
  name: string;
}

const BASE_URL = "http://localhost:8080/categories";

//SECTION - CRUD OPERATIONS

//NOTE - FETCH

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Could not fetch categories");
  }
  const categories = await response.json();
  return categories;
};

//NOTE - FETCH BY ID

export const fetchCategoryById = async (id: string): Promise<Category> => {
  const response = await fetch(BASE_URL + "/" + id);
  if (!response.ok) {
    throw new Error("Could not fetch category with id " + id);
  }
  const category = await response.json();
  return category;
};

//NOTE - CREATE

export const createCategory = async (
  newCategoryData: NewCategoryData
): Promise<Category[]> => {
  const response = await fetch(BASE_URL, {
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
