package io.carrie.todos.category;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    // constructor injection
    private CategoryRepository categoryRepository;
    private ModelMapper modelMapper;

    CategoryService(CategoryRepository categoryRepository, ModelMapper modelMapper) {
        this.categoryRepository = categoryRepository;
        this.modelMapper = modelMapper;
    }

    // turns categoryDTO into a new Category object
    public Category create(CreateCategoryDTO dataFromUser) {
        Category newCategory = modelMapper.map(dataFromUser, Category.class);
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

    // delete a specific category
    public boolean deleteById(Long id) {
        Optional<Category> searched = this.findById(id);
        if (searched.isPresent()) {
            Category found = searched.get();
            this.categoryRepository.delete(found);
            return true; // successfully deleted
        }
        return false; // not deleted (category not found)
    }

    // update a specific category
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

}
