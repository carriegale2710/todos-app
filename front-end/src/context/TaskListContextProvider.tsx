import { useState, createContext, type PropsWithChildren } from "react";
import type { Task } from "../services/tasks";

interface TaskListContextType {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskListContext = createContext<TaskListContextType>({
  taskList: [],
  setTaskList: () => {},
});

const TaskListContextProvider = ({ children }: PropsWithChildren) => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  return (
    <TaskListContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
