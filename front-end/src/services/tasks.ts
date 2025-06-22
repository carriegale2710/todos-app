import { useContext } from "react";
import {
  TaskListContext,
  useTaskListContext,
} from "../context/TaskListContextProvider";
import type { Category } from "./categories";

export interface Task {
  id: number;
  name: string;
  dueDate: Date;
  isCompleted: boolean;
  isArchived: boolean;
  categories: Category[];
}

//SECTION - CRUD OPERATIONS

//NOTE - CREATE
//TODO CreateNewTask

//NOTE - READ

export const getAllTasks = async (): Promise<Task[]> => {
  const response = await fetch("http://localhost:8080/tasks");
  if (!response.ok) {
    throw new Error("Could not fetch tasks");
  }
  const tasks = await response.json();
  return tasks;
};

export const getTaskById = async (id: number): Promise<Task> => {
  const response = await fetch("http://localhost:8080/tasks/" + id);
  if (!response.ok) {
    throw new Error("Could not fetch task with id " + id);
  }
  const task = await response.json();
  console.log("task found in DB: ", task);
  return task;
};

//NOTE - UPDATE
//TODO - UpdateTaskById

//endpoint = task.id
//method = POST
//prepare data - serialise to JSON
//set up fetch request
//integrate with state management
//handle errors and edge cases
//test integration

//NOTE - DELETE
//TODO - DeleteTaskById

//use UpdateTaskById but just update isArchived = true;

//SECTION - BUTTON HANDLERS

export const handleIsCompleted = async (taskId: number) => {
  console.log("checkbox clicked");
  console.log("task.id: " + taskId);
  const taskToUpdate: Task = await getTaskById(taskId);
  taskToUpdate.isCompleted = !taskToUpdate.isCompleted;
  console.log("updated isComplete: ", taskToUpdate);
  //todo - update isCompleted boolean in DB (isCompleted = !isCompleted)
};

export const handleDelete = () => {
  console.log("deleted button clicked");
  // //todo call on backend - update isArchived boolean in DB (task.isArchived = true)
};

export const handleDuplicate = () => {
  console.log("duplicate button clicked");
  //todo - like add new task + copy data -> POST to DB
};
