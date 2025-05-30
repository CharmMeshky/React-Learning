/* eslint-disable react-refresh/only-export-components */
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { BrowserRouter } from "react-router";
// eslint-disable-next-line no-unused-vars
import menuData from "./context";
import App from "./App";
import Sidebar from "./sidebar";
import "./index.css";

// install axios

const root = document.getElementById("root");

const Main = () => {
  const [clickMenu, setMenu] = useState(false);

  return (
    <BrowserRouter>
      <div className="main">
        <menuData.Provider value={{ clickMenu, setMenu }}>
          <App />
          <Sidebar />
        </menuData.Provider>
      </div>
    </BrowserRouter>
  );
};

createRoot(root).render(<Main />);
