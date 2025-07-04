package io.carrie.todos.task;

import java.util.List;

import org.hibernate.validator.constraints.Length;
import jakarta.validation.constraints.NotBlank;

public class UpdateTaskDTO {

    @NotBlank
    @Length(min = 2)
    // todo -maybe max length of 20 words?
    private String name;

    // todo - need to validate its in correct date format YYYY-MM-DD
    private String dueDate;

    // should default be false on creation?
    private Boolean isCompleted;

    // virtual field? - for now testing with random bool
    private Boolean isArchived;

    // todo - should this be changed to List<Category> ? to fix category updates?
    private List<String> categories;

    public String getName() {
        return name;
    }

    public Boolean getIsArchived() {
        return isArchived;
    }

    public String getDueDate() {
        return dueDate;
    }

    public Boolean getIsCompleted() {
        return isCompleted;
    }

    public List<String> getCategories() {
        return categories;
    }
}
