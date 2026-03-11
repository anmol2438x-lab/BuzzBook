import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

import PostListProvider from "../store/PostListProvider";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content glassmorphism">
          <Header />
          <Outlet></Outlet>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
