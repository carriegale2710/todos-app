import {
  useState,
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { getAllTasks, type Task } from "../services/tasks";
import { fetchHandler } from "../utils/fetchHandler";

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
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("PENDING");

  // Fetch all Categories on mount
  useEffect(() => {
    fetchHandler(getAllTasks, setFetchStatus, setError).then(setTaskList);
  }, []);

  return (
    <TaskListContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;

//NOTE - CUSTOM HOOK
export function useTaskListContext() {
  const context = useContext(TaskListContext);
  if (!context) {
    throw new Error(
      "useTaskListContext must be used within a TaskListContextProvider"
    );
  }
  return context;
}
