import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import TasksPage from "./pages/TasksPage/TasksPage";
import TaskListContextProvider from "./context/TaskListContextProvider";
import CategoryListContextProvider from "./context/CategoryListContextProvider";

function App() {
  return (
    <>
      <h1>Todos App</h1>
      <BrowserRouter>
        <TaskListContextProvider>
          <CategoryListContextProvider>
            <Routes>
              <Route path="/" element={<TasksPage />} />
            </Routes>
          </CategoryListContextProvider>
        </TaskListContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
