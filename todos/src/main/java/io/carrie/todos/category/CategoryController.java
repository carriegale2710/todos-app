package io.carrie.todos.category;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    /*
     * TODO - put methods here:
     * GET /categories
     * POST /categories
     * PUT /categories/:id
     * DELETE /categories/:id
     */

    ArrayList<String> categoryList = new ArrayList<String>();

    @GetMapping
    public ArrayList<String> getCategories() {
        return categoryList;
    }

    @PostMapping
    public ArrayList<String> addCategory() {
        return categoryList;
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
