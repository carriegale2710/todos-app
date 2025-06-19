package io.carrie.todos.config;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import com.github.javafaker.Faker;

public class TaskGenerator {

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

    public static Map<String, Object> generateTask() {
        Faker faker = new Faker();
        Random random = new Random();

        Map<String, Object> task = new HashMap<>();
        task.put("name", pokemonTasks[random.nextInt(pokemonTasks.length)]);
        task.put("dueDate",
                faker.date().future(30, java.util.concurrent.TimeUnit.DAYS).toInstant().toString().split("T")[0]);
        task.put("isCompleted", faker.bool().bool());
        task.put("isArchived", faker.bool().bool());
        task.put("categories", Collections.singletonList(pokemonTypes[random.nextInt(pokemonTypes.length)]));

        return task;
    }

    public static void main(String[] args) {
        Map<String, Object> task = generateTask();
        System.out.println(task);
    }

}
