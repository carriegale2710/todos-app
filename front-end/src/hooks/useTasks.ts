import { useEffect } from "react";
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

  // Fetch all tasks on mount
  useEffect(() => {
    getAllTasks()
      .then(setTaskList)
      .catch((error) => {
        console.error("Failed to fetch tasks:", error);
      });
  }, []);

  // CRUD operations that update state
  const addTask = async (data: NewTaskData) => {
    try {
      const newTask = await create(data);
      setTaskList((prev) => [
        ...prev,
        ...(Array.isArray(newTask) ? newTask : [newTask]),
      ]);
    } catch (error) {
      console.error("Failed to create task:", error);
      alert(`Failed to create task: ${error}`);
    }
  };

  const duplicateTask = async (data: Task) => {
    try {
      const dupTask = await duplicate(data);
      setTaskList((prev) =>
        Array.isArray(dupTask) ? [...prev, ...dupTask] : [...prev, dupTask]
      );
    } catch (error) {
      console.error("Failed to duplicate task:", error);
      alert(`Failed to duplicate task: ${error}`);
    }
  };

  const removeTask = async (id: number) => {
    await deleteTaskById(id);
    setTaskList((prev) => prev.filter((t) => t.id !== id));
  };

  return { taskList, setTaskList, addTask, duplicateTask, removeTask };
}
