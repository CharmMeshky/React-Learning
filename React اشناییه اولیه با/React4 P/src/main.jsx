import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { Moarefy } from "./Moarefy";
import { Welcome } from "./Welcome";
import { Timer } from "./Timer";

const myRoot = document.querySelector(".root");

class Show extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="text">
          <Moarefy />
          <Welcome />
        </div>
        <Timer />
      </div>
    );
  }
}

// setInterval(() => {
  createRoot(myRoot).render(<Show />);
// }, 1000);
