package io.carrie.todos.common;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import io.carrie.todos.common.exceptions.NotFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
    // this global handler takes care of any errors thrown in our app (safety net)

    // handle any missing ID errors thrown for any controller method
    // (deleting/creating by ID)
    @ExceptionHandler(NotFoundException.class) // need to provide class of exception type used
    public ResponseEntity<String> handleNotFoundException(NotFoundException error) {
        return new ResponseEntity<>(error.getMessage(), HttpStatus.NOT_FOUND); // 404 status send back
    }
}
