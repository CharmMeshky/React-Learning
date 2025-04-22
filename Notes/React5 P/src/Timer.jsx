import "./index.css";
import React from "react";

const intervalSeted = [];
let interval;

export class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 10,
    };
  }

  kaheshDahande = () => {
    interval = setInterval(() => {
      this.setState((state) => ({
        number: state.number - 1,
      }));
    }, 1000);

    intervalSeted.push(interval);
  };

  stopFunction = () => {
    intervalSeted.forEach((intervall) => {
      clearInterval(intervall);
    });
  };

  componentDidMount() {
    this.kaheshDahande();
  }

  componentDidUpdate() {
    if (this.state.number == 0) this.stopFunction();
  }

  render() {
    return (
      <>
        <div className="date">{this.state.number}</div>
        <div className="buttons">
          <button onClick={this.kaheshDahande} className="start">
            START
          </button>
          <button onClick={this.stopFunction} className="stop">
            STOP
          </button>
        </div>
      </>
    );
  }
}
