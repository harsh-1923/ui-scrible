import "./App.css";
import { Routes, Route } from "react-router-dom";
import ComponentLibrary from "./Pages/ComponentLibrary/ComponentLibrary";
import HomePage from "./Pages/HomePage/HomePage";
import CubertoDesignListDemo from "./Pages/Demo/CubertoDesignListDemo";
import SpotifyFilterDemo from "./Pages/Demo/SpotifyFilterDemo/SpotifyFilterDemo";
import InfiniteScrollerDemo from "./Pages/Demo/InfiniteScroller/InfiniteScrollerDemo.jsx";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<ComponentLibrary />} />
        <Route path="/components" element={<ComponentLibrary />} />
        <Route
          path="/components/cuberto-design-list"
          element={<CubertoDesignListDemo />}
        />
        <Route
          path={"/components/spotify-filters"}
          element={<SpotifyFilterDemo />}
        />
        <Route
          path={"/components/infinite-scroller"}
          element={<InfiniteScrollerDemo />}
        />
      </Routes>
    </main>
  );
}

export default App;
