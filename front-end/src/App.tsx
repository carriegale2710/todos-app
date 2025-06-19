import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import TasksPage from "./pages/TasksPage/TasksPage";
import TaskListContextProvider from "./context/TaskListContextProvider";
import CategoryListContextProvider from "./context/CategoryListContextProvider";
import Header from "./components/Header/Header";

function App() {
  const userName = "Carrie";
  const homeHeading = "Adventure Awaits";
  return (
    <>
      <BrowserRouter>
        <Header homeHeading={homeHeading} userName={userName} />
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
