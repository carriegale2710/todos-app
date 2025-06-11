# Todos Spring App Project

---

# Todos Spring API

---

## Overview

Create an API to be integrated with your [todos-ui](../todos-ui/) project, that allows you to store and retrieve tasks from a database.

## MVP

- [x] Categories and Todos should be stored in separate tables
- [ ] Deleting a task should set an `isArchived` flag in the database instead of deleting the task from the database
- [ ] Add a filter to the frontend application that allows you to filter tasks by category

## Endpoints

- [x] `GET /categories`
- [x] `POST /categories`
- [x] `PUT /categories/:id`
- [x] `DELETE /categories/:id`

- [x] `GET /todos`
- [ ] `GET /todos?category={}` query parameters
- [ ] `POST /todos`
- [ ] `PUT /todos/:id`
- [ ] `DELETE /todos/:id`

## Todos

- Name: String
- Due Date: Date
- Completed: Boolean
- Categories: String ArrayList

```json
todo
{
    "name": "Create a Spring project",
    "dueDate": "2025-06-01",
    "isCompleted": true,
    "categories": ["coding", "backend"]
}
```

## Categories

- Name: String

```json
category
{
    "name": "coding",
}
```

# Todos React UI

---

## Overview

Your task is to create an application that allows you to track, add, and delete tasks as well as manage categories of tasks.

Please don't make your app look like this, make it nicer! This is just a summary of what the frontend should be doing: ![Todos UI Example](assets/todos_app.PNG)

## MVP

- [ ] Must be able to add categories
- [ ] Must be able to add new tasks tagged with a task category
- [ ] Must be able to update tasks automatically by changing the task name and the category
- [ ] Must be able to duplicate tasks
- [ ] Must be able to delete tasks
- [ ] You must add your own styling

## Bonus

- Come up with a feature that allows us to delete and update task categories
- Create a summary section that lists how many of each type of task there are
