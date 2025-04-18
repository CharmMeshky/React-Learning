import "./index.css";
import React from "react";

export class Timer extends React.Component {
    constructor(){
      super()
      this.state = {
        time: new Date().toLocaleTimeString(),
      }
    }
    render() {
      setInterval(() => {
        this.setState({
          time: new Date().toLocaleTimeString(),
        })
      }, 1000)
  
      return (
        <div className="date">
          <div>{this.state.time}</div>
        </div>
      );
    }
}

