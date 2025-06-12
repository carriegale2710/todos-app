package io.carrie.todos.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    public void addCorsMappings(CorsRegistry registry) {
        // only allow our own front-end to make calls to this API
        String[] allowedOrigins = { "http://localhost:5173/", "http://120.0.0.1:5173/" };
        // any type of CRUD request is allowed *
        registry.addMapping("/**").allowedOrigins(allowedOrigins).allowedMethods("*").allowedHeaders("*");
    }
}
