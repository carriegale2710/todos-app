import { useState } from "react";
import TaskList from "../../components/container/Task/TaskList/TaskList";
import CategoryList from "../../components/container/Category/CategoryList/CategoryList";
import classes from "./TasksPage.module.scss";
import Button from "../../components/presentational/Button/Button";
import DataSummary from "../../components/container/DataSummary/DataSummary";
import Header from "../../components/presentational/Header/Header";
import Modal from "../../components/presentational/Modal/Modal";
import TaskForm from "../../components/container/Task/TaskForm/TaskForm";
import CategoryForm from "../../components/container/Category/CategoryForm/CategoryForm";

const TasksPage = () => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [layoutView, setlayoutView] = useState("Grid");

  const userName = "Carrie";
  const homeScreenHeading = "Good Morning, ";

  const onClick = () => {
    layoutView === "Grid" ? setlayoutView("List") : setlayoutView("Grid");
  };

  return (
    <section className={classes.page}>
      <Header heading={homeScreenHeading} userName={userName} />
      <DataSummary />

      <Button onClick={() => setShowTaskModal(true)}>New Task</Button>
      {showTaskModal && (
        <Modal heading="New Task" onClose={() => setShowTaskModal(false)}>
          <TaskForm />
        </Modal>
      )}

      <Button onClick={() => setShowCategoryModal(true)}>New Category</Button>
      {showCategoryModal && (
        <Modal
          heading="New Category"
          onClose={() => setShowCategoryModal(false)}
        >
          <CategoryForm />
        </Modal>
      )}

      <Header heading="Today's Tasks" />
      <br />
      <CategoryList />
      <Button onClick={onClick}>{layoutView}</Button>
      <TaskList layoutView={layoutView} />
    </section>
  );
};

export default TasksPage;
