import Users from "./users/users";
import Post from "./posts/post";
import Gallery from "./gallery/gallery";
import Todo from "./todos/todo";
import Add from "./users/addUser";
import Warning from "./users/warning";
import { Routes, Route, Navigate} from "react-router";
// import { useState } from "react";

const App = () => {
  // const [isUser,setUser] = useState(false)

  return (
    
    <div className="app">
        <Routes>
          {/* <Route path="/users" element={isUser ? <Users/>  : <Navigate replace to="/gallery"/>}/> */}
          <Route path="/users" element={<Users/>}/>
          {/* <Route path="/users/add/:id" element = {<Add/>}/> */}
          <Route path="/users/add" element = {<Add/>}>
            <Route path=":id" element={<Warning/>}/>
          </Route>
          <Route path="/posts" element={<Post />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<Users />} />
        </Routes>
    </div>
  );
};

export default App;
