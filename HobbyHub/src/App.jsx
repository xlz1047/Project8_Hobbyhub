import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeFeed from "./components/HomeFeed";
import PostPage from "./components/PostPage";
import CreatePostForm from "./components/CreatePostForm";
import EditPostForm from "./components/EditPostForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/create" element={<CreatePostForm />} />
          <Route path="/edit/:id" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
