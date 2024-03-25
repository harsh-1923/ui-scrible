import "./App.css";
import { Routes, Route } from "react-router-dom";
import ComponentLibrary from "./Pages/ComponentLibrary/ComponentLibrary";
import HomePage from "./Pages/HomePage/HomePage";
import CubertoDesignListDemo from "./Pages/Demo/CubertoDesignListDemo";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentLibrary />} />
        <Route
          path="/components/cuberto-design-list"
          element={<CubertoDesignListDemo />}
        />
      </Routes>
    </main>
  );
}

export default App;
