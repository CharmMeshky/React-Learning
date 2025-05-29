/* eslint-disable no-unused-vars */
import Users from "./users/users";
import Post from "./posts/post";
import Gallery from "./gallery/gallery";
import Todo from "./todos/todo";
import { Routes, Route, Navigate,  } from "react-router";
import { useState } from "react";

const App = () => {
  const[isUser,setIsUser] = useState(false)

  return (
    <div className="app">
        <Routes>
          {/* <Route path="/" element={isUser ? <Users /> : <Navigate replace to="/gallery" />} /> */}
          <Route path="/users" element={<Users/>}/>
          <Route path="/posts" element={<Post />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<Users />} />
        </Routes>
    </div>
  );
};

export default App;
