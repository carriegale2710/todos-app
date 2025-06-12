# Todos Spring Boot API

Welcome to my first full-stack App project! Here are some notes how I built this app, how to run it and more details on how it works.

## 1. Project Brief

### Backend MVP (Spring API)

---

Create an API to be integrated with your [todos-ui](frontend/README.md) project, that allows you to store and retrieve tasks from a database.

- [x] Categories and Todos should be stored in separate tables
- [ ] Deleting a task should set an `isArchived` flag in the database instead of deleting the task from the database
- [/] Add a filter to the frontend application that allows you to filter tasks by category

### Todos Table

```json
todo
{
    "name": "Create a Spring project", //String
    "dueDate": "2025-06-01", //Date
    "isCompleted": true, //Boolean
    "categories": ["coding", "backend"] //String ArrayList
}
```

Endpoints:

- [x] `GET /todos`
- [/] `GET /todos?category={}` //query parameters
- [x] `POST /todos` //also use for duplication
- [/] `PUT /todos/:id` //fix categories
- [x] `DELETE /todos/:id`

### Categories Table

```json
category
{
    "name": "coding" //String
}
```

Endpoints:

- [x] `GET /categories`
- [x] `POST /categories`
- [x] `PUT /categories/:id`
- [x] `DELETE /categories/:id`

---

## 2. API Build Documentation

---

### Backend Functionality

| Features Built                | CRUD Actions         |
| ----------------------------- | -------------------- |
| Add/delete **categories**     | ✅ Create, Delete    |
| Add/update/delete **tasks**   | ✅ Full CRUD         |
| Tag tasks with **categories** | ✅ Relationship      |
| Duplicate tasks               | ✅ Bonus-style logic |

---

### Database Flow Chart

![Database Flow Diagram](assets/DB_Diagram.png)
[Link](https://dbdiagram.io/d/To-do-App-684ae6371dff20a534caf9d8)

#### 1. Categories:

```
- id INT PRIMARY KEY
- name VARCHAR
```

#### 2. Tasks:

```
- id INT PRIMARY KEY
- name VARCHAR
- due_date DATE
- is_completed BOOLEAN
- is_archived BOOLEAN
- categories JSON or String[]
```

---

---

## 🧠 BONUS IDEAS

### ✅ Task Duplication Logic (in backend)

- [ ] GET task by ID
- [ ] Copy its name & category_id
- [ ] Save as new task

```java
@PostMapping("/tasks/{id}/duplicate")
public Task duplicateTask(@PathVariable Long id) {
    Task original = taskRepo.findById(id).orElseThrow();
    Task copy = new Task(original.getName(), original.getCategory());
    return taskRepo.save(copy);
}
```

## REFERENCES

- [Spring Framework Diagram](assets/spring_framework.png)
