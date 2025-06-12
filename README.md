# Todos Spring Boot API

Welcome! Here are some brief notes and links to running this app.

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
- [x] `POST /todos`
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

## 2. API Build Documentation

---

### Backend Functionality

| Features Built                | CRUD Actions                  |
| ----------------------------- | ----------------------------- | --- |
| Add/delete **categories**     | ✅ Create, ❌ (Bonus: Delete) |
| Add/update/delete **tasks**   | ✅ Full CRUD                  |
| Tag tasks with **categories** | ✅ Relationship               |
| Duplicate tasks               | ✅ Bonus-style logic          |     |

---

### CRUD API Endpoints

| Method | Endpoint                | Purpose                         |
| ------ | ----------------------- | ------------------------------- |
| GET    | `/tasks`                | Get all tasks                   |
| POST   | `/tasks`                | Create a new task               |
| PUT    | `/tasks/{id}`           | Update task name/category       |
| DELETE | `/tasks/{id}`           | Delete task                     |
| POST   | `/tasks/{id}/duplicate` | Duplicate a task (custom logic) |

### Database Flow Chart

![Database Flow Diagram](assets/DB_Diagram.png)

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
