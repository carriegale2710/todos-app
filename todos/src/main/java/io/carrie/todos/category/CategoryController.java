package io.carrie.todos.category;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.NotFound;

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

    @GetMapping
    public ResponseEntity<List<Category>> getAll() {
        List<Category> allCategories = this.categoryService.findAll();
        return new ResponseEntity<>(allCategories, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Category> create(@Valid @RequestBody CreateCategoryDTO dataFromUser) {
        System.out.println("Calling post method with " + dataFromUser.getName());
        Category savedCategory = this.categoryService.create(dataFromUser);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) throws NotFoundException {
        boolean deleted = this.categoryService.deleteById(id);
        if (deleted) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        throw new NotFoundException();
    }

    @PutMapping("/{id}")
    public String update(@PathVariable Long id) {
        return "updates a category with id " + id;

    }

}
