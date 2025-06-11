package io.carrie.todos.task;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto generates unique id for each todo in DB
    private Long id;

    @Column
    private String name;

    @Column
    private String dueDate; // todo - format dueDate as YYYY-MM-DD //could use toString()

    @Column
    private Boolean isCompleted; // todo = false;

    @Column
    private List<String> categories;

}
