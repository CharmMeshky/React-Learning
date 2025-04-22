import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { Moarefy } from "./Moarefy";
import { Welcome } from "./Welcome";
import { Timer } from "./Timer";

const myRoot = document.getElementById("root");

//PROPS

class Show extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "hello my dear friend",
    };

    // this.newTitle = this.newTitle.bind(this)
  }

//   newTitle(){
//      this.setState({
//       title : "to click kardy..."
//   })
// }

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

// setInterval(() => {
createRoot(myRoot).render(<Show />);
// }, 1000);
