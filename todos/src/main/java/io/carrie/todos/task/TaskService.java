package io.carrie.todos.task;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import io.carrie.todos.category.Category;
import io.carrie.todos.category.CategoryRepository;

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

    private TaskRepository taskRepository;
    private ModelMapper modelMapper;
    private CategoryRepository categoryRepository;

    // constructor DI
    TaskService(TaskRepository taskRepository, ModelMapper modelMapper, CategoryRepository categoryRepository) {
        this.taskRepository = taskRepository;
        this.modelMapper = modelMapper;
        this.categoryRepository = categoryRepository;
    }

    // return all Tasks in list
    public List<Task> findAll() {
        return this.taskRepository.findAll();
    }

    // FIXME - filters list of tasks with specific category name
    public List<Task> findByCategory(String categoryName) {
        return this.taskRepository.findByCategories_Name(categoryName);
    }

    // create a new Task, add to list
    public Task create(CreateTaskDTO dataFromUser) {
        Task newTask = modelMapper.map(dataFromUser, Task.class);

        // fetch/create Category entities by name + set them on new Task entity
        List<Category> categoryEntities = dataFromUser.getCategories().stream()
                .map(name -> categoryRepository.findByName(name)
                        .orElseGet(() -> categoryRepository.save(new Category(name))))
                .toList();

        newTask.setCategories(categoryEntities);
        Task savedTask = this.taskRepository.save(newTask);
        return savedTask; // user feedback
    }

    // find a specific Task
    public Optional<Task> findById(Long id) {
        return this.taskRepository.findById(id);
    }

    // update a specific Task
    public Optional<Task> updateById(Long id, UpdateTaskDTO dataFromUser) {
        Optional<Task> searched = this.findById(id);

        if (searched.isEmpty()) {
            return searched;
        }

        Task foundTask = searched.get();

        this.modelMapper.map(dataFromUser, foundTask);
        this.taskRepository.save(foundTask);
        return Optional.of(foundTask);
    }

    // delete a specific Task
    public boolean deleteById(Long id) {
        Optional<Task> searched = this.findById(id);
        if (searched.isPresent()) {
            Task found = searched.get();
            this.taskRepository.delete(found);
            return true; // successfully deleted
        }
        return false; // not deleted (Task not found)
    }
}
