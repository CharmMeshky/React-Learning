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
      isStarted: false,
      isClicked: false,
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
      time:"",
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

 getTime = () => {
  let h = this.state.hour
  let m = this.state.min;
  let s = this.state.sec;
  let nowTime = `${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s} `
  this.setState({
  time: nowTime,
  isClicked: !this.state.isClicked,
 })
 }

  render() {
    let h = this.state.hour
    let m = this.state.min;
    let s = this.state.sec;
    const title = this.props.title
    const isLight = this.props.isLight 
    const myStyle = {
      color: isLight ? "black" : "white", 
      backgroundColor : isLight ? "white" : "black", 
      border : "2px solid"
    }
    return (
      <>
        <button className="date" style={{boxShadow: isLight? "0px 0px 15px 10px black" : ""}} onClick={this.getTime}>{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s} `}</button>
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
          <button className="test" onClick={this.props.setBackground} style={myStyle}>{title}</button>
        </div>
        <h4 style={{display: this.state.isClicked?"inline-block" :"none"}}>{this.state.time}</h4>
      </>
    );
  }
}






