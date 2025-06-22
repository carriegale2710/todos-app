package io.carrie.todos.category;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.carrie.todos.common.exceptions.NotFoundException;
import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    /*
     * Category methods here:
     * GET /categories
     * POST /categories
     * PUT /categories/:id
     * DELETE /categories/:id
     */

    // constructor dependency injection
    private CategoryService categoryService;

    CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // NOTE GET FULL CATEGORY ARRAYLIST
    @GetMapping
    public ResponseEntity<List<Category>> getAll() {
        List<Category> allCategories = this.categoryService.findAll();
        return new ResponseEntity<>(allCategories, HttpStatus.OK);
    }

    // NOTE GET AN EXISTING CATEGORY BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Category> findCategoryById(@PathVariable Long id)
            throws NotFoundException {
        Optional<Category> foundCategory = this.categoryService.findById(id);
        System.out.println(foundCategory.toString());
        if (foundCategory.isEmpty()) {
            throw new NotFoundException("Category id not found: ", id);
        }
        return new ResponseEntity<>(foundCategory.get(), HttpStatus.OK);
    }

    // NOTE CREATE A NEW CATEGORY
    @PostMapping
    public ResponseEntity<Category> create(@Valid @RequestBody CreateCategoryDTO dataFromUser) {
        Category created = this.categoryService.create(dataFromUser);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    // NOTE UPDATE AN EXISTING CATEGORY
    @PutMapping("/{id}")
    public ResponseEntity<Category> updateById(@PathVariable Long id,
            @Valid @RequestBody UpdateCategoryDTO dataFromUser)
            throws NotFoundException {
        Optional<Category> updated = this.categoryService.updateById(id, dataFromUser);
        if (updated.isPresent()) {
            return new ResponseEntity<>(updated.get(), HttpStatus.OK);
        }
        throw new NotFoundException("Category", id);
    }

    // NOTE DELETE AN EXISTING CATEGORY
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) throws NotFoundException {
        // FIXME - needs to soft delete (update isArchived ) note deleted permanently
        boolean deleted = this.categoryService.deleteById(id);
        if (deleted) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        throw new NotFoundException("Category", id);
    }
}
