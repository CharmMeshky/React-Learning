import { listdata } from "./contexts";
import "./index.css";
import React from "react";

export class Welcome extends React.Component {
  static contextType = listdata

  render() {
    return (
    <>
    <h2 className="welcome" style={{color: this.context.isLight? "black" : "rgb(170, 128, 12)"}}>welcome to IRAN</h2>
    </>
    )
  }
}
