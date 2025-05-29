import Titr from './Titr'
import Form from './Form'
import './index.css'
import { Component, createRef } from 'react'

class App extends Component{

    constructor() {
        super()
        this.input = createRef()
    }

    render(){
        {console.log(this.input)}
        return(
            <div className="app">
                <Titr/>
                <Form ref={this.input}/>
            </div>
        )
    }

}

export default App