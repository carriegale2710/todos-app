package io.carrie.todos.category;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    public String defaultGreeting() {
        return "this is the service layer";
    }

    // let's pretend this is the database
    ArrayList<String> categoryList = new ArrayList<String>(
            Arrays.asList("URGENT", "NOT STARTED", "UNI WORK", "PERSONAL"));

    public String createCategory(CreateCategoryDTO dataFromUser) {
        String upperCaseName = dataFromUser.getName().toUpperCase();
        this.categoryList.add(upperCaseName);
        return upperCaseName + " added to categories list";
    }

    // return all categories in list
    public ArrayList<String> getCategories() {
        return categoryList;
    }

    // a way to find something in the array and return if exists or return Optional
    public String findByCategory(String category) throws Exception {
        Optional<String> foundCategory = categoryList.stream().filter(c -> c.equals(category.toUpperCase()))
                .findFirst();
        if (foundCategory.isPresent()) {
            return foundCategory.get();
        }
        throw new Exception("Name not found");
    }

}
