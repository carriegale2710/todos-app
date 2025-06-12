package io.carrie.todos.task;

import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    /*
     * TODO - Task Methods here:
     * - `GET /todos`
     * - `GET /todos?category={}` query parameters
     * - `POST /todos`
     * - `PUT /todos/:id`
     * - `DELETE /todos/:id`
     */

    // constructor dependency injection
    private TaskService taskService;

    TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public ResponseEntity<List<Task>> find() {
        List<Task> allTasks = this.taskService.findAll();
        return new ResponseEntity<>(allTasks, HttpStatus.OK);
    }

    // filter tasks by category
    @GetMapping("?category={categoryName}")
    public ResponseEntity<List<Task>> filter(@RequestParam(required = false) String categoryName) {
        List<Task> tasks;
        if (categoryName != null) {
            tasks = taskService.findByCategory(categoryName);
        } else {
            tasks = taskService.findAll();
        }
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Task> create(@Valid @RequestBody CreateTaskDTO dataFromUser) {
        Task created = this.taskService.create(dataFromUser);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id)
            throws io.carrie.todos.common.exceptions.NotFoundException {
        boolean deleted = this.taskService.deleteById(id);
        if (deleted) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        throw new io.carrie.todos.common.exceptions.NotFoundException("Book with id " + id + " does not exist");
    }

    // FIXME - fix in Service layer: does not properly remove previous categories
    // List when updating
    @PutMapping("/{id}")
    public ResponseEntity<Task> updateById(@PathVariable Long id,
            @Valid @RequestBody UpdateTaskDTO dataFromUser) throws io.carrie.todos.common.exceptions.NotFoundException {
        Optional<Task> updated = this.taskService.updateById(id, dataFromUser);
        if (updated.isPresent()) {
            return new ResponseEntity<>(updated.get(), HttpStatus.OK);
        }
        throw new io.carrie.todos.common.exceptions.NotFoundException("Task with id " + id + " does not exist");
    }
}
