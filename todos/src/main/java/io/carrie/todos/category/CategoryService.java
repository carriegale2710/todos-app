package io.carrie.todos.category;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Category create(CreateCategoryDTO dataFromUser) {
        // turn categoryDTO into a new Category object
        Category newCategory = new Category();
        newCategory.setName(dataFromUser.getName());
        Category savedCategory = this.categoryRepository.save(newCategory);
        return savedCategory; // user feedback
    }

    // return all categories in list
    public List<Category> findAll() {
        return this.categoryRepository.findAll();
    }

    // find a specific category
    public Optional<Category> findById(Long id) {
        return this.categoryRepository.findById(id);
    }

}
