package io.carrie.todos.task;

import io.carrie.todos.task.Task;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    /*
     * TODO - put methods here:
     * - `GET /todos`
     * - `GET /todos?category={}` query parameters
     * - `POST /todos`
     * - `PUT /todos/:id`
     * - `DELETE /todos/:id`
     */

    ArrayList<Task> taskList = new ArrayList<>();

    @GetMapping
    public ArrayList<Task> getTasks(@RequestParam(required = false) String category) {
        if (category != null) {
            System.out.println("filters tasks by category: " + category);
            // return <tasks with name == category>;
        }
        System.out.println("gets all tasks");
        return taskList;
    }

    @PostMapping
    public ArrayList<Task> addTask() {
        System.out.println("adds a new task");
        Task task1 = new Task();
        taskList.add(task1);
        return taskList;
    }

    @PutMapping("/{id}")
    public String updateTask(@PathVariable Long id) {
        return "updates a task with id " + id;
    }

    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable Long id) {
        return "deletes a task with id " + id;
    }
}
