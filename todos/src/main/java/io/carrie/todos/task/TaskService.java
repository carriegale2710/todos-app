package io.carrie.todos.task;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

    /*
     * TODO - TaskService Methods >>> TaskController Endpoints here:
     * - findAll >>> `GET /tasks`
     * - findByCategory >>> `GET /tasks?category={}` query parameters
     * - create >> `POST /tasks`
     * - updateById >>> `PUT /tasks/:id`
     * - deleteById >>> `DELETE /tasks/:id`
     */

    // constructor DI
    private TaskRepository TaskRepository;
    private ModelMapper modelMapper;

    TaskService(TaskRepository TaskRepository, ModelMapper modelMapper) {
        this.TaskRepository = TaskRepository;
        this.modelMapper = modelMapper;
    }

    // return all Tasks in list
    public List<Task> findAll() {
        return this.TaskRepository.findAll();
    }

    // TODO - return all Tasks in list with specific Category.name
    public List<Task> findByCategory(String queryParam) {
        // return this.TaskRepository.findAll(queryParam);
        return this.TaskRepository.findAll(); // change this
    }

    // create a new Task, add to list
    public Task create(CreateTaskDTO dataFromUser) {
        Task newTask = modelMapper.map(dataFromUser, Task.class);
        Task savedTask = this.TaskRepository.save(newTask);
        return savedTask; // user feedback
    }

    // find a specific Task
    public Optional<Task> findById(Long id) {
        return this.TaskRepository.findById(id);
    }

    // update a specific Task
    public Optional<Task> updateById(Long id, UpdateTaskDTO dataFromUser) {
        Optional<Task> searched = this.findById(id);

        if (searched.isEmpty()) {
            return searched;
        }

        Task foundTask = searched.get();

        this.modelMapper.map(dataFromUser, foundTask);
        this.TaskRepository.save(foundTask);
        return Optional.of(foundTask);
    }

    // delete a specific Task
    public boolean deleteById(Long id) {
        Optional<Task> searched = this.findById(id);
        if (searched.isPresent()) {
            Task found = searched.get();
            this.TaskRepository.delete(found);
            return true; // successfully deleted
        }
        return false; // not deleted (Task not found)
    }
}
