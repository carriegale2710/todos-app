package io.carrie.todos.task;

import java.util.List;

import org.hibernate.validator.constraints.Length;
import jakarta.validation.constraints.NotBlank;

public class CreateTaskDTO {

    @NotBlank
    @Length(min = 2)
    // todo -maybe max length of 20 words?
    private String name;

    // todo - validate its in correct date format YYYY-MM-DD?
    private String dueDate;

    // should default be false on creation? - for now testing with random bool
    private Boolean isCompleted;

    // virtual field? - for now testing with random bool
    private Boolean isArchived;

    // this should create a new category for each string added to array
    // todo - should check for any duplicate categories too
    private List<String> categories;

    public String getName() {
        return name;
    }

    public String getDueDate() {
        return dueDate;
    }

    public Boolean getIsCompleted() {
        return isCompleted;
    }

    public Boolean getIsArchived() {
        return isArchived;
    }

    public List<String> getCategories() {
        return categories;
    }

}
