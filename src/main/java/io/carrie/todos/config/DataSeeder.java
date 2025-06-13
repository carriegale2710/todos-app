package io.carrie.todos.config;

import java.util.concurrent.TimeUnit;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import com.github.javafaker.Faker;

import io.carrie.todos.category.Category;
import io.carrie.todos.category.CategoryRepository;
import io.carrie.todos.task.Task;
import io.carrie.todos.task.TaskRepository;

@Component
@Profile("dev") // only run this in dev mode
public class DataSeeder implements CommandLineRunner {
    // executes every time app is run

    private final TaskRepository taskRepository;
    private final CategoryRepository categoryRepository;
    private final Faker faker = new Faker();

    DataSeeder(TaskRepository taskRepository, CategoryRepository categoryRepository) {
        this.taskRepository = taskRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // check number of tasks in your db
        System.out.println("tasks:" + taskRepository.count());
        System.out.println("categories:" + categoryRepository.count());

        if (taskRepository.count() == 0) {
            for (int i = 0; i < 20; i++) {
                Task newTask = new Task();
                newTask.setName(faker.lorem().sentence(3)); // taskname
                newTask.setIsCompleted(faker.bool().bool()); // random bool
                newTask.setIsArchived(faker.bool().bool());
                newTask.setDueDate(faker.date().future(20, TimeUnit.DAYS));
                this.taskRepository.save(newTask);
            }
        }

        if (categoryRepository.count() == 0) {
            for (int i = 0; i < 20; i++) {
                Category newCategory = new Category();
                newCategory.setName(faker.food().fruit()); // taskname
                this.categoryRepository.save(newCategory);
            }
        }
    }

}
