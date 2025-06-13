package io.carrie.todos.task;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import io.carrie.todos.category.Category;
import io.carrie.todos.category.CategoryRepository;

@Service
public class TaskService {

    private TaskRepository taskRepository;
    private CategoryRepository categoryRepository;
    private ModelMapper modelMapper;

    // constructor Dependency Injection
    TaskService(TaskRepository taskRepository, CategoryRepository categoryRepository, ModelMapper modelMapper) {
        this.taskRepository = taskRepository;
        this.categoryRepository = categoryRepository;
        this.modelMapper = modelMapper; // Model Mapper helps reduce boilerplate code, needed to manually get and set
                                        // each property for a new task entity
    }

    /*
     * TaskService Methods >>> TaskController Endpoints here:
     * - findAll
     * - findByCategory >>>
     * - create >> `POST /tasks`
     * - updateById >>> `PUT /tasks/:id`
     * - deleteById >>> `DELETE /tasks/:id`
     */

    // SECTION - FINDING DATA in DB

    // NOTE FIND ALL tasks in list >>> `GET /tasks`
    public List<Task> findAll() {
        return this.taskRepository.findAll();
    }

    // NOTE FIND ONE TASK BY ID - find a specific Task
    public Optional<Task> findById(Long id) {
        Optional<Task> foundTask = this.taskRepository.findById(id);
        return foundTask;
    }

    // NOTE - FILTER TASKS LIST BY CATEGORY NAME `GET /tasks?category={}`
    public List<Task> findByCategory(String categoryName) {
        return this.taskRepository.findByCategories_Name(categoryName);
        // query parameters -> filter the list by matching `name` property
        // FIXME - filters list of tasks with specific category name
    }

    // SECTION - EDITING DB

    // NOTE - CREATE a new Task, add to list
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

    // NOTE -UPDATE a specific Task
    public Optional<Task> updateById(Long id, UpdateTaskDTO dataFromUser) {
        Optional<Task> searched = this.findById(id);

        if (searched.isEmpty()) {
            return searched;
        }

        Task foundTask = searched.get();

        // FIXME - does not properly update categories List when edited
        this.modelMapper.map(dataFromUser, foundTask);
        this.taskRepository.save(foundTask);
        return Optional.of(foundTask);
    }

    // NOTE - DELETE a specific Task
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
