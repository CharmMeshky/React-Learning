/* eslint-disable no-unused-vars */
import React from "react";
import { List } from "./LIst";
// eslint-disable-next-line no-unused-vars
import { testContext } from "./Testcontext";
import { colorContext } from "./Testcontext";

export class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      second: 0,
    };
  }


  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({
        second: state.second + 1,
      }));
    }, 1000);
  }

  render() {
    return (
      <testContext.Provider value={{second : this.state.second , color : "darkblue"}}>
        <colorContext.Provider value = "green">
          <h1>hello my friend</h1>
          <List second={this.state.second} />
        </colorContext.Provider>
      </testContext.Provider>
    );
  }
}
