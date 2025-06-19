import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import TasksPage from "./pages/TasksPage/TasksPage";
import TaskListContextProvider from "./context/TaskListContextProvider";

function App() {
  return (
    <>
      <h1>Todos App</h1>
      <BrowserRouter>
        <TaskListContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
          </Routes>
        </TaskListContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
