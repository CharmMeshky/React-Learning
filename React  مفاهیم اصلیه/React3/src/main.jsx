import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { App } from "./App";

// life cicle in function component
// children in props(for function)
const myRoot = document.getElementById("root");

const Show = () => {
  return <App />;
};

createRoot(myRoot).render(
  <Show />
);
