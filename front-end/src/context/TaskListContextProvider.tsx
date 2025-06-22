import {
  useState,
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { getAllTasks, type Task } from "../services/tasks";

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

  useEffect(() => {
    getAllTasks()
      .then((result) => {
        // console.log("All tasks from API: ", result);
        setTaskList(result);
        console.log("taskList updated");
      })
      .catch(console.warn);
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
