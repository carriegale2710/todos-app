import type {
  Category,
  NewCategoryData,
} from "../../../../services/categories";

export const validateCategoryForm = (
  categoryValues: NewCategoryData,
  categoryList: Category[]
) => {
  let isValid = true;
  const errors: { name: string } = {
    name: "",
  };

  if (categoryValues.name.trim() == "") {
    isValid = false;
    errors.name = "Category name must not be empty";
  }

  if (!categoryValues) {
    isValid = false;
    errors.name = "Could not get categoryValues";
  }

  if (categoryValues.name.length > 10) {
    isValid = false;
    errors.name = "Category name must not be longer than 20 characters";
  }

  if (
    categoryList?.some(
      (category) =>
        category.name.trim().toLowerCase() ===
        categoryValues.name.trim().toLowerCase()
    )
  ) {
    isValid = false;
    errors.name = "Category name already exists";
  }

  //TODO - can add more validations here if needed

  return { isValid, errors };
};
