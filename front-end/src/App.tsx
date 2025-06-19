import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <>
      <h1>Todos App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
