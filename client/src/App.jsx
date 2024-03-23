import "./App.css";
import { Routes, Route } from "react-router-dom";
import ComponentLibrary from "./Pages/ComponentLibrary/ComponentLibrary";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentLibrary />} />
      </Routes>
    </main>
  );
}

export default App;
