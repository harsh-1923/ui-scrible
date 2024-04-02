import "./App.css";
import { Routes, Route } from "react-router-dom";
import ComponentLibrary from "./Pages/ComponentLibrary/ComponentLibrary";
import HomePage from "./Pages/HomePage/HomePage";
import CubertoDesignListDemo from "./Pages/Demo/CubertoDesignListDemo";
import SpotifyFilterDemo from "./Pages/Demo/SpotifyFilterDemo/SpotifyFilterDemo";
import InfiniteScrollerDemo from "./Pages/Demo/InfiniteScroller/InfiniteScrollerDemo.jsx";
import AppleStoreBannerDemo from "./Pages/Demo/AppleStoreBannerDemo/AppleStoreBannerDemo.jsx";
import ChatInterfaces from "./Pages/Demo/ChatInterfaces/ChatInterfaces.jsx";
import ModalDemo from "./Pages/Demo/ModalDemo/ModalDemo.jsx";

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
        <Route
          path={"/components/app-store-banner"}
          element={<AppleStoreBannerDemo />}
        />

        <Route
          path="/components/chat-interfaces"
          element={<ChatInterfaces />}
        />

        <Route path="/components/animated-modal" element={<ModalDemo />} />
      </Routes>
    </main>
  );
}

export default App;
