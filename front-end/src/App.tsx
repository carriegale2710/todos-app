import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import TasksPage from "./pages/TasksPage/TasksPage";
import TaskListContextProvider from "./context/TaskListContextProvider";
import CategoryListContextProvider from "./context/CategoryListContextProvider";
import Header from "./components/Header/Header";
// import QuoteCard from "./components/QuoteCard/QuoteCard";

function App() {
  const userName = "Carrie";
  const homeScreenHeading = "Adventure Awaits";
  return (
    <>
      <BrowserRouter>
        <Header heading={homeScreenHeading} userName={userName} />
        {/* <QuoteCard /> //FIXME - not fetching properly */}
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
