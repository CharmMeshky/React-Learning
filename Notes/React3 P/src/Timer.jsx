import "./index.css";
import React from "react";

export class Timer extends React.Component {
  constructor(){
    super()
    this.state = {
      time : new Date().toLocaleTimeString()
    }
  }

  render(){
    setInterval(() => {
      this.setState({
        time : new Date().toLocaleTimeString()
      })
    }, 1000)

    return(
      <div className="date">{this.state.time}</div>
    )
  }
}

// PERFECT EXAMPLE

// class Timer extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         time: new Date().toLocaleTimeString(),
//         counter: 0
//       };
//     }
  
//     componentDidMount() {
//       this.interval = setInterval(() => {
//         this.setState(prevState => ({
//           time: new Date().toLocaleTimeString(),
//           counter: prevState.counter + 1
//         }));
//       }, 1000);
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.interval);
//     }
  
//     render() {
//       return(
//         <div className="date">
//           <div>{this.state.time}</div>
//           <div>{this.state.counter}</div>
//         </div>
//       );
//     }
//   }