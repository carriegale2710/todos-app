package io.carrie.todos.task;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    /*
     * TODO - put methods here
     * - `GET /todos`
     * - `GET /todos?category={}` query parameters
     * - `POST /todos`
     * - `PUT /todos/:id`
     * - `DELETE /todos/:id`
     */

    @GetMapping
    public String getTasks() {
        return "get tasks";
    }

    @PostMapping
    public String addTask() {
        return "add tasks";
    }

}
