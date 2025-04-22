import "./index.css";
import React from "react";

let intervalSeted 

export class Timer extends React.Component {
  constructor(){
    super()
    this.state = {
        number : 10
    }
  }

  componentDidMount(){
    console.log(this.props)
    intervalSeted = setInterval(() => {
        this.setState(state => ({
          number : state.number -1
        }))
      }, 1000)
    //   console.log("componentDidMount");
      
  }

  componentDidUpdate(){
    if(this.state.number === 0){
        clearInterval(intervalSeted)
    }
    // console.log("update");
    
  }

  render(){
    // console.log("render")
    return(
      <>
        <div className="date">{this.state.number}</div>
        <button onClick={this.props.newTitle}>click</button>
      </>
    )
  }
}