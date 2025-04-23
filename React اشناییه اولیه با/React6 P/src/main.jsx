import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { Moarefy } from "./Moarefy";
import { Welcome } from "./Welcome";
import { Timer } from "./Timer";

const myRoot = document.getElementById("root");



class Show extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "hello my dear friend",
    };

  }

  render() {
    return (
      <div className="flex">
        <div className="text">
          <Moarefy title = {this.state.title} />
          <Welcome />
        </div>
        <Timer />
      </div>
    );
  }
}

createRoot(myRoot).render(<Show />);
