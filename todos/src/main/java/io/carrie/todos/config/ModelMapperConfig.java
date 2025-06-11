package io.carrie.todos.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        // this gets injected into services
        // this reduces boilerplate code with getters/setters
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper;

    }
}
