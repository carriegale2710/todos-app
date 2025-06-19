package io.carrie.todos.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;
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
    private final Random random = new Random();

    DataSeeder(TaskRepository taskRepository, CategoryRepository categoryRepository) {
        this.taskRepository = taskRepository;
        this.categoryRepository = categoryRepository;
    }

    private static final String[] pokemonTypes = {
            "Fire", "Water", "Grass", "Electric", "Psychic",
            "Fairy", "Ghost", "Dragon", "Steel", "Dark",
            "Fighting", "Flying"
    };

    private static final String[] pokemonTasks = {
            "Catch Pikachu", "Battle Gym Leader", "Hatch Egg",
            "Find Rare Candy", "Complete Pokedex Entry",
            "Train Charmander", "Evolve Eevee", "Explore Safari Zone"
    };

    @Override
    public void run(String... args) throws Exception {
        if (categoryRepository.count() == 0) {
            for (int i = 0; i < 5; i++) {
                Category newCategory = new Category();
                newCategory.setName(pokemonTypes[random.nextInt(pokemonTypes.length)]); // taskname
                this.categoryRepository.save(newCategory);
            }
        }

        if (taskRepository.count() == 0) {
            for (int i = 0; i < 10; i++) {
                Task newTask = new Task();
                newTask.setName(pokemonTasks[random.nextInt(pokemonTasks.length)]); // taskname
                newTask.setIsCompleted(faker.bool().bool()); // random bool
                newTask.setIsArchived(faker.bool().bool());
                newTask.setDueDate(faker.date().future(20, TimeUnit.DAYS));
                List<Category> categoryList = new ArrayList<>();
                Optional<Category> category = categoryRepository.findById(faker.number().numberBetween(1L, 5L));
                if (category.isPresent()) {
                    categoryList.add(category.get());
                }
                newTask.setCategories(categoryList);
                this.taskRepository.save(newTask);
            }
        }

        // check number of tasks in your db
        System.out.println("tasks:" + taskRepository.count());
        System.out.println("categories:" + categoryRepository.count());
    }

}
