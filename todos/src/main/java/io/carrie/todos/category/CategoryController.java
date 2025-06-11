package io.carrie.todos.category;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
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
        categoryList.add("finish homework");
        return categoryList;
    }

    @PostMapping
    public ArrayList<String> addCategories() {
        categoryList.add("more homework");
        return categoryList;
    }

}
