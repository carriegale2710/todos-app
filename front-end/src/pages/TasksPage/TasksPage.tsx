import { useState } from "react";
import TaskList from "../../components/Task/TaskList/TaskList";
import CategoryList from "../../components/Category/CategoryList/CategoryList";
import classes from "./TasksPage.module.scss";
import TaskForm from "../../components/Task/TaskForm/TaskForm";
import Button from "../../components/Button/Button";
import DataSummary from "../../components/DataSummary/DataSummary";
import Header from "../../components/Header/Header";

const TasksPage = () => {
  const [showModal, setShowModal] = useState(false);
  const userName = "Carrie";
  const homeScreenHeading = "Good Morning, ";

  return (
    <section className={classes.page}>
      <Header heading={homeScreenHeading} userName={userName} />
      <DataSummary />
      <Button onClick={() => setShowModal(true)}>Add new Task</Button>
      {showModal && <TaskForm onClose={() => setShowModal(false)} />}
      <CategoryList />
      <Header heading="Today's Tasks" />
      <TaskList />
    </section>
  );
};

export default TasksPage;
