/* eslint-disable react-refresh/only-export-components */
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { BrowserRouter } from "react-router";
// eslint-disable-next-line no-unused-vars
import { menuData } from "./context";
import App from "./App";
import Sidebar from "./sidebar";
import "./index.css";
import Portal from "./Modal/Portal";
// eslint-disable-next-line no-unused-vars
import { commentsClick } from "./context";
//AMozeshe component haye sathe bala

const root = document.getElementById("root");

const Main = () => {
  const [clickMenu, setMenu] = useState(false);
  const [clickComments, setClickComments] = useState({
        isClicked:false,
        number:null
    },);

  return (
    <BrowserRouter>
      <div className="main">
        <commentsClick.Provider value={{clickComments,setClickComments}}>
          <menuData.Provider value={{ clickMenu, setMenu }}>
            <Portal />
            <App />
            <Sidebar />
          </menuData.Provider>
        </commentsClick.Provider>
      </div>
    </BrowserRouter>
  );
};

createRoot(root).render(<Main />);
