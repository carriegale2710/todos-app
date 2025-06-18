package io.carrie.todos.category;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    /*
     * DONE - TaskService Methods >>> TaskController Endpoints here:
     * - findAll >>> `GET /categories`
     * - create >> `POST /categories`
     * - updateById >>> `PUT /categories/:id`
     * - deleteById >>> `DELETE /categories/:id`
     */

    // constructor DI
    private CategoryRepository categoryRepository;
    private ModelMapper modelMapper;

    CategoryService(CategoryRepository categoryRepository, ModelMapper modelMapper) {
        this.categoryRepository = categoryRepository;
        this.modelMapper = modelMapper;
    }

    // FIND BY CATEGORY ID: find a specific category - use this in other methods
    // too!
    public Optional<Category> findById(Long id) {
        Optional<Category> foundCategory = this.categoryRepository.findById(id);
        return foundCategory;
    }

    // FIND ALL - return all categories in list
    public List<Category> findAll() {
        return this.categoryRepository.findAll();
    }

    // CREATE - turns categoryDTO into a new Category object
    public Category create(CreateCategoryDTO dataFromUser) {
        Category newCategory = modelMapper.map(dataFromUser, Category.class);
        Category savedCategory = this.categoryRepository.save(newCategory);
        return savedCategory; // NOTE user feedback - sent back to user to confirm details
    }

    // UPDATE a specific category
    public Optional<Category> updateById(Long id, UpdateCategoryDTO dataFromUser) {
        Optional<Category> searched = this.findById(id);

        if (searched.isEmpty()) {
            return searched;
        }

        Category foundCategory = searched.get();

        this.modelMapper.map(dataFromUser, foundCategory);
        this.categoryRepository.save(foundCategory);
        return Optional.of(foundCategory);
    }

    // DELETE a specific category
    public boolean deleteById(Long id) {
        Optional<Category> searched = this.findById(id);
        if (searched.isPresent()) {
            Category found = searched.get();
            this.categoryRepository.delete(found);
            return true; // successfully deleted
        }
        return false; // not deleted (category not found)
        // NOTE - used a boolean as better for user feedback
        // TODO - should add some front end logic to confirm a deletion
    }
}
