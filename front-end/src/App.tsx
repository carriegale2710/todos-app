import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import TasksPage from "./pages/TasksPage/TasksPage";
import TaskListContextProvider from "./context/TaskListContextProvider";
import CategoryListContextProvider from "./context/CategoryListContextProvider";
import CategoryFilterContextProvider from "./context/CategoryFilterContextProvider";
import Header from "./components/presentational/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <TaskListContextProvider>
          <CategoryListContextProvider>
            <CategoryFilterContextProvider>
              <Header heading={"POKE TASKS"} />
              <Routes>
                <Route path="/" element={<TasksPage />} />
              </Routes>
            </CategoryFilterContextProvider>
          </CategoryListContextProvider>
        </TaskListContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
