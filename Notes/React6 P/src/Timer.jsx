import "./index.css";
import React from "react";

let intervalSeted;
export class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      sec: 0,
      min: 0,
      hour: 0,
      ziroSec: 0,
      ziroMin: 0,
      ziroHour: 0,
      isStarted: false,
    };
  }

  cornometr = () => {
    if (this.state.isStarted == false)
      intervalSeted = setInterval(() => {
        this.setState({
          sec: this.state.sec + 1,
          isStarted: true,
        });
      }, 1000);
  };

  stopTime = () => {
    clearInterval(intervalSeted);
    this.setState({
      isStarted: false,
    });
  };

  resetTime = () => {
    this.stopTime();
    this.setState({
      sec: 0,
      min: 0,
      hour: 0,
    });
  };

  componentDidUpdate() {
    if (this.state.sec == 60) {
      this.setState({
        sec: 0,
        min: this.state.min + 1,
      });
    } else if (this.state.min == 60) {
      this.setState({
        min: 0,
        hour: this.state.hour + 1,
      });
    }
  }

  render() {
    let h = this.state.hour;
    let m = this.state.min;
    let s = this.state.sec;
    return (
      <>
        <div className="date">{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s} `}</div>
        <div className="buttons">
          <button className="start" onClick={this.cornometr}>
            start
          </button>
          <button className="stop" onClick={this.stopTime}>
            stop
          </button>
          <button className="reset" onClick={this.resetTime}>
            reset
          </button>
        </div>
      </>
    );
  }
}
