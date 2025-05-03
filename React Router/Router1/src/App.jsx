import Users from "./users/users";
import Post from "./posts/post";
import Gallery from "./gallery/gallery";
import Todo from "./todos/todo";
import { Routes, Route } from "react-router";
const App = () => {
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
    </div>
  );
};

export default App;
