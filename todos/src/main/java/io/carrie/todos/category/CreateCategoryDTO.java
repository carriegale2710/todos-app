package io.carrie.todos.category;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;

public class CreateCategoryDTO {

    @NotBlank
    @Length(min = 2)
    private String name;

    public String getName() {
        return name;
    }

}
