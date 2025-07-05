import { useState } from "react";

import TaskListContextProvider from "./context/TaskListContextProvider";
import CategoryListContextProvider from "./context/CategoryListContextProvider";
import CategoryFilterContextProvider from "./context/CategoryFilterContextProvider";

import { BrowserRouter, Route, Routes } from "react-router";
import TasksPage from "./pages/TasksPage/TasksPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Header from "./components/presentational/Header/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <BrowserRouter>
        <TaskListContextProvider>
          <CategoryListContextProvider>
            <CategoryFilterContextProvider>
              <Header heading={"POKE TASKS"} />
              <Routes>
                <Route
                  path="/login"
                  element={<LoginPage onLogin={onLogin} />}
                />
                <Route
                  path="/"
                  element={
                    isLoggedIn ? <TasksPage /> : <LoginPage onLogin={onLogin} />
                  }
                />
                <Route path="/tasks" element={<TasksPage />} />
              </Routes>
            </CategoryFilterContextProvider>
          </CategoryListContextProvider>
        </TaskListContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
