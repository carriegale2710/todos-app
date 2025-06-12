export interface Category {
  id: number;
  name: string;
}

export interface Task {
  id: number;
  name: string;
  dueDate: Date;
  isCompleted: boolean;
  isArchived: boolean;
  categories: Category[];
}

export const getAllTasks = async (): Promise<Task[]> => {
  const response = await fetch("http://localhost:8080/tasks");
  const tasks = await response.json();
  return tasks;
};

export const getTaskById = async (id: string): Promise<Task> => {
  const response = await fetch("http://localhost:8080/tasks" + id);
  if (!response.ok) {
    throw new Error("Could not fetch data");
  }
  return await response.json();
};
