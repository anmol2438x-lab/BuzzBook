import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

import PostListProvider from "./store/PostListProvider";

import CreatePost from "./components/CreatePost";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header />

          {selectedTab === "Home" && <PostList />}
          {selectedTab === "CreatePost" && <CreatePost />}
          {selectedTab === "Dashboard" && <Dashboard />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
