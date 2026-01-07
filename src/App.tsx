import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <div className="p-10">
      <Routes>
        <Route path="/posts" element={<PostPage />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
