package io.carrie.todos.config;

import java.util.concurrent.TimeUnit;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import com.github.javafaker.Faker;

import io.carrie.todos.task.Task;
import io.carrie.todos.task.TaskRepository;

@Component
@Profile("dev") // only run this in dev mode
public class DataSeeder implements CommandLineRunner {
    // executes every time app is run

    private final TaskRepository taskRepository;
    private final Faker faker = new Faker();

    DataSeeder(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("tasks:" + taskRepository.count());
        // check number of tasks in your db

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
    }

}
