import { Component, PureComponent, createRef } from "react";

class Form extends Component{

    constructor(){
        super()
        this.state = {
            name : "",
        }
        this.counter = 0
        this.Input = createRef()
    }

    handleName = () => {
        this.setState(
            {
                name : this.Input.current.value
            }
        )
    };

    render(){
        return (
            <>
                <input ref={this.Input} type="text"></input>
                <div className="buttons">
                    <button onClick={() => {this.Input.current.value = ""; }}>مخفی</button>
                    <button onClick={this.handleName}>ثبت</button>
                </div>
                <span>{this.counter++}</span>
            </>
        );
    }
};

export default Form;


// useImperativeHandle