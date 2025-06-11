package io.carrie.todos.task;

import java.util.Date;
import java.util.List;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;

public class UpdateTaskDTO {

    @NotBlank
    @Length(min = 2)
    private String name;

    private String dueDate;

    @NotBlank
    private Boolean isCompleted;

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

    public List<String> getCategories() {
        return categories;
    }
}
