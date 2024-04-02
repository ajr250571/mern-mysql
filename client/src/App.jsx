import { Route, Routes } from "react-router-dom";
import "./App.css";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
