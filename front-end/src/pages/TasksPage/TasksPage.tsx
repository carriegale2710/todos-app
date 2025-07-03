import { useState } from "react";
import TaskList from "../../components/container/Task/TaskList/TaskList";
import CategoryList from "../../components/container/Category/CategoryList/CategoryList";
import classes from "./TasksPage.module.scss";
import TaskForm from "../../components/container/Task/TaskForm/TaskForm";
import Button from "../../components/presentational/Button/Button";
import DataSummary from "../../components/presentational/DataSummary/DataSummary";
import Header from "../../components/presentational/Header/Header";

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
