import { useState } from "react";
import {
  getAllTasks,
  create,
  duplicate,
  deleteTaskById,
} from "../services/tasks";
import type { Task, NewTaskData } from "../services/tasks";
import { useTaskListContext } from "../context/TaskListContextProvider";

export function useTasks() {
  const { taskList, setTaskList } = useTaskListContext();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch all tasks
  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const tasks = await getAllTasks();
      setTaskList(tasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // CRUD operations that update state
  const addTask = async (data: NewTaskData) => {
    try {
      setIsLoading(true);
      const newTask = await create(data);
      setTaskList((prev) => [
        ...prev,
        ...(Array.isArray(newTask) ? newTask : [newTask]),
      ]);
    } catch (error) {
      console.error("Failed to create task:", error);
      alert(`Failed to create task: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const duplicateTask = async (data: Task) => {
    try {
      setIsLoading(true);
      const dupTask = await duplicate(data);
      setTaskList((prev) =>
        Array.isArray(dupTask) ? [...prev, ...dupTask] : [...prev, dupTask]
      );
    } catch (error) {
      console.error("Failed to duplicate task:", error);
      alert(`Failed to duplicate task: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const removeTask = async (id: number) => {
    await deleteTaskById(id);
    setTaskList((prev) => prev.filter((t) => t.id !== id));
  };

  return {
    taskList,
    setTaskList,
    fetchTasks,
    addTask,
    duplicateTask,
    removeTask,
    isLoading,
    setIsLoading,
  };
}
