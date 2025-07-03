import type { Category } from "./categories";

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
  const response = await fetch("http://localhost:8080/tasks");
  if (!response.ok) {
    throw new Error("Could not fetch tasks");
  }
  const tasks = await response.json();
  return tasks;
};

//NOTE - (print entry in DB)
export const getTaskById = async (id: number): Promise<Task> => {
  const response = await fetch("http://localhost:8080/tasks/" + id);
  if (!response.ok) {
    throw new Error("Could not fetch task with id " + id);
  }
  const task = await response.json();
  console.log("task found in DB: ", task);
  return task;
};

//NOTE - CREATE (new entry in DB)

export const create = async (newTaskData: NewTaskData): Promise<Task[]> => {
  console.log("taskData received in DB: ", newTaskData);
  const response = await fetch("http://localhost:8080/tasks", {
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

//NOTE - DUPLICATE (copy entry in DB)

export const duplicate = async (taskDataCopy: Task) => {
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
  create(duplicateTaskData);
};

//NOTE - UPDATE (custom edit entry in DB)
//NOTE - COMPLETE (updates task prop isComplete = true)
//NOTE - SOFT DELETE (updates task prop isArchived = true)

export const updateTaskById = async (
  id: number,
  newTaskData: NewTaskData
): Promise<Task> => {
  console.log("taskData received: ", newTaskData);
  const response = await fetch("http://localhost:8080/tasks/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTaskData),
  });
  if (!response.ok) {
    throw new Error("Could not update task with id " + id);
  }
  const updatedTask = await response.json();
  console.log("Task update in DB: ", updatedTask);
  return updatedTask;
};

//NOTE - HARD DELETE (permanent DB deletion)
export const deleteTaskById = async (id: number): Promise<Task> => {
  const response = await fetch("http://localhost:8080/tasks/" + id, {
    method: "UPDATE",
  });
  if (!response.ok) {
    throw new Error("Could not delete task with id " + id);
  }
  const deletedTask = await response.json();
  return deletedTask;
};
