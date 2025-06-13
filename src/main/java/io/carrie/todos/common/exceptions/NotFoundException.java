package io.carrie.todos.common.exceptions;

public class NotFoundException extends Exception {

    // useful for throwing errors to do with looking up non-existent ids
    // (eg. deleteByID/updateById)
    // for controllers

    public NotFoundException(String type, Long id) {
        super(type.toUpperCase() + " with id " + id + " does not exist"); // as extending from Exception
        // should catch this exception and return HTTPStatus.NOT_FOUND, 404 response
    }
}
