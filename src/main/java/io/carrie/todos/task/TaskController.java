package io.carrie.todos.task;

import org.springframework.web.bind.annotation.RestController;

import io.carrie.todos.common.exceptions.NotFoundException;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

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
     * - `GET /tasks`
     * - `GET /tasks/:id`
     * - `GET /tasks?category={}` query parameters
     * - `POST /tasks`
     * - `PUT /tasks/:id`
     * - `DELETE /tasks/:id`
     */

    // constructor dependency injection
    private TaskService taskService;

    TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // SECTION - FETCHING DATA FROM DATABASE

    // GET ALL TASKS IN DB
    @GetMapping
    public ResponseEntity<List<Task>> find() {
        List<Task> allTasks = this.taskService.findAll();
        return new ResponseEntity<>(allTasks, HttpStatus.OK);
    }

    // GET TASK BY ID
    @GetMapping("/{id}")
    public ResponseEntity<String> findById(@PathVariable Long id)
            throws NotFoundException {
        Optional<Task> foundTask = this.taskService.findById(id);
        System.out.println(foundTask.toString());
        if (foundTask.isEmpty()) {
            throw new NotFoundException("Task", id);
        }
        return new ResponseEntity<>("Task found", HttpStatus.NO_CONTENT);
    }

    // FILTER TASKS BY CATEGORY
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

    // SECTION - EDITING THE DATABASE

    // ADD NEW TASK
    @PostMapping
    public ResponseEntity<Task> create(@Valid @RequestBody CreateTaskDTO dataFromUser) {
        Task created = this.taskService.create(dataFromUser);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    // DELETE A TASK
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id)
            throws NotFoundException {
        boolean deleted = this.taskService.deleteById(id);
        if (!deleted) {
            throw new NotFoundException("Task", id);
        }
        return new ResponseEntity<>("Task deleted", HttpStatus.NO_CONTENT);
    }

    // EDIT A TASK
    // FIXME - fix in Service layer: does not first remove previous categories
    @PutMapping("/{id}")
    public ResponseEntity<Task> updateById(@PathVariable Long id,
            @Valid @RequestBody UpdateTaskDTO dataFromUser) throws NotFoundException {
        Optional<Task> updated = this.taskService.updateById(id, dataFromUser);
        if (updated.isEmpty()) {
            throw new NotFoundException("Task", id);
        }
        return new ResponseEntity<>(updated.get(), HttpStatus.OK);
    }
}
