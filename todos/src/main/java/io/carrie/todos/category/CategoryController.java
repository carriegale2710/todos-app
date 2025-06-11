package io.carrie.todos.category;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryService categoryService;
    /*
     * TODO - put methods here:
     * GET /categories
     * POST /categories
     * PUT /categories/:id
     * DELETE /categories/:id
     */

    CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // @GetMapping
    // public String greet() {
    // return this.categoryService.defaultGreeting();
    // }

    @GetMapping
    public ArrayList<String> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping
    public ResponseEntity<String> addCategory(@Valid @RequestBody CreateCategoryDTO dataFromUser) {
        System.out.println("Calling post method with " + dataFromUser.getName());
        String savedCategory = this.categoryService.createCategory(dataFromUser);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public String updateCategory(@PathVariable Long id) {
        return "updates a category with id " + id;
    }

    @DeleteMapping("/{id}")
    public String deleteCategory(@PathVariable Long id) {
        return "deletes a category with id " + id;
    }

}
