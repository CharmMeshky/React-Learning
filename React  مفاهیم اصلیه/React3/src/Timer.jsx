/* eslint-disable no-unused-vars */
import "./index.css";
import React from "react";
import { timerData } from "./contexts";

let intervalSeted;

export class Timer extends React.Component {
  static contextType = timerData;

  constructor() {
    super();
    this.state = {
      sec: 0,
      min: 0,
      hour: 0,
      isStarted: false,
    };
  }

  cornometr = () => {
    if (this.state.isStarted === false)
      intervalSeted = setInterval(() => {
        this.setState((prevState) => ({
          sec: prevState.sec + 1,
          isStarted: true,
        }));
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
    
    const listTime = [... document.querySelector(".list-time").childNodes];
    listTime.forEach((list) => {
      list.remove()
    })
    
    this.setState({
      sec: 0,
      min: 0,
      hour: 0,
    });
  };

  componentDidUpdate() {
    if (this.state.sec === 60) {
      this.setState((prevState) => ({
        sec: 0,
        min: prevState.min + 1,
      }));
    } else if (this.state.min === 60) {
      this.setState((prevState) => ({
        min: 0,
        hour: prevState.hour + 1,
      }));
    }
  }

  getTime = () => {
    // let h = this.state.hour;
    // let m = this.state.min;
    // let s = this.state.sec;
    // let nowTime = `${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
    //   s > 9 ? s : "0" + s
    // } `;

    let timingHtml = document.querySelector(".date").innerHTML;
    this.context.setTime([...this.context.time, timingHtml]);
  };

  render() {
    let h = this.state.hour;
    let m = this.state.min;
    let s = this.state.sec;
    const title = this.context.title;
    const isLight = this.context.isLight;
    const myStyle = {
      color: isLight ? "black" : "white",
      backgroundColor: isLight ? "white" : "black",
      border: "2px solid",
    };
    const styleShadow = { boxShadow: isLight ? "0px 0px 15px 10px black" : "" };

    return (
      <>
        <button className="date" style={styleShadow} onClick={this.getTime}>{`${
          h > 9 ? h : "0" + h
        } : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s} `}</button>
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
          <button
            className="test"
            onClick={this.context.setBackground}
            style={myStyle}
          >
            {title}
          </button>
        </div>
      </>
    );
  }
}
