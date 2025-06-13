package io.carrie.todos.task;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
    // List<Task> findByCategories_Name(String name);
    // List<Task> findByCategory_IdList()
}
