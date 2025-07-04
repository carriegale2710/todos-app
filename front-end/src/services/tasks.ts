import { fetchHandler } from "../utils/fetchHandler";
import type { Category } from "./categories";

const BASE_URL = "http://localhost:8080/tasks";

//SECTION - INTERFACES

export interface Task {
  id: number;
  name: string;
  dueDate: Date;
  isCompleted: boolean;
  isArchived: boolean;
  categories: Category[];
}

export interface NewTaskData {
  name: string;
  dueDate: Date;
  isCompleted: boolean;
  isArchived: boolean;
  categories: string[];
}

//SECTION - CRUD OPERATIONS

//NOTE - (print all entries in DB)

export const getAllTasks = async (): Promise<Task[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Could not fetch tasks");
  }
  const tasks = await response.json();
  return tasks;
};

//NOTE - (print entry in DB)
export const getTaskById = async (id: number): Promise<Task> => {
  const response = await fetch(BASE_URL + "/" + id);
  if (!response.ok) {
    throw new Error("Could not fetch task with id " + id);
  }
  const task = await response.json();
  console.log("task found in DB: ", task);
  return task;
};

//NOTE - CREATE (new entry in DB) // sends form data in TaskForm
export const createTask = async (newTaskData: NewTaskData): Promise<Task[]> => {
  console.log("taskData received in DB: ", newTaskData);
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTaskData),
  });
  if (!response.ok) {
    throw new Error("Could not create new task");
  }
  const task = await response.json();
  console.log("New task created in DB: ", task);

  return task;
};

//NOTE - HARD DELETE (permanent DB deletion) //todo - jsut send ID
export const deleteTaskById = async (id: number): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Could not hard delete task with id + ${id}`);
  }
  const deletedTask = await response.json();
  console.log(`deleted task id: ${id}`);
  return deletedTask;
};

//NOTE - COMPLETE (updates task prop isComplete = true)  //todo - just send ID
export const completeTask = async (id: number): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
  });
  if (!response.ok) {
    throw new Error(`Could not completed task with id + ${id}`);
  }
  const deletedTask = await response.json();
  console.log(`completed task id: ${id}`);
  return deletedTask;
};

//NOTE - SOFT DELETE (updates task prop isArchived = true)

//NOTE - DUPLICATE (copy entry in DB) //todo - should just send ID

export const duplicateTask = async (taskDataCopy: Task) => {
  const t = taskDataCopy;
  const duplicateTaskData: NewTaskData = {
    name: t.name,
    dueDate: t.dueDate,
    isCompleted: t.isCompleted,
    isArchived: t.isArchived,
    categories: t.categories.map((c) => c.name),
  };
  console.log(
    `duplicateTaskData copied from task.id: ${t.id} - ${t.name}: `,
    duplicateTaskData
  );
  createTask(duplicateTaskData);
};

//NOTE - UPDATE (custom edit entry in DB) //todo - needs a editForm comp
export const updateTaskById = async (
  id: number,
  newTaskData: NewTaskData
): Promise<Task> => {
  console.log("taskData received: ", newTaskData);
  const response = await fetch(BASE_URL + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTaskData),
  });
  if (!response.ok) {
    throw new Error(`Could not update task with id + ${id}`);
  }
  const updatedTask = await response.json();
  console.log("Task update in DB: ", updatedTask);
  return updatedTask;
};
