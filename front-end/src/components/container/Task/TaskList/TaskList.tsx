import classes from "./TaskList.module.scss";
import { useTaskListContext } from "../../../../context/TaskListContextProvider";
import type { Task } from "../../../../services/tasks";
import TaskCard from "../TaskCard/TaskCard";
import { useCategoryFilterContext } from "../../../../context/CategoryFilterContextProvider";
import { useEffect, useState } from "react";

type TaskListProps = {
  layoutView: string;
};

const TaskList = ({ layoutView }: TaskListProps) => {
  const { taskList } = useTaskListContext();
  const { categoryFilter } = useCategoryFilterContext();
  const [filterActive, setFilterActive] = useState(false);
  const [filteredTaskList, setFilteredTaskList] = useState(taskList);

  let categoryFilterIdList: number[];
  const displayedTaskList = filterActive ? filteredTaskList : taskList;

  useEffect(() => {
    if (categoryFilter.length > 0) {
      setFilterActive(true);
    } else {
      setFilterActive(false);
    }
    categoryFilterIdList =
      categoryFilter.length > 0 ? categoryFilter.map((c) => c.id) : [];
  }, [categoryFilter]);

  useEffect(() => {
    const filtered = taskList.filter((task: Task) => {
      //list the id of each category tagged by the task
      const taskCategoryIdList =
        task.categories.length > 0 ? task.categories.map((c) => c.id) : [];
      //if any id in taskCategoryIdList matches any id in categoryFilterList? add to filteredTaskList : don't add
      const isTaskIncluded = taskCategoryIdList.some((taskCategoryId) => {
        return categoryFilterIdList.includes(taskCategoryId); //returns boolean
      });
      return isTaskIncluded; //if true, will be added to filteredTaskList
    });
    setFilteredTaskList(filtered);
  }, [categoryFilter]);

  return (
    <section className={layoutView === "Grid" ? classes.grid : classes.list}>
      {taskList.length === 0 ? (
        <p>You have no tasks yet!</p>
      ) : (
        displayedTaskList.map((task: Task) => {
          return (
            !task.isArchived && (
              <TaskCard layoutView={layoutView} task={task} key={task.id} />
            )
          );
        })
      )}
    </section>
  );
};

export default TaskList;
