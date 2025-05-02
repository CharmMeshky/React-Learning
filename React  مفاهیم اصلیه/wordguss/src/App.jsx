import Titr from './Titr'
import Form from './Form'
import './index.css'
import { createRef } from 'react'

const App = () => {
    const myComponentRef = createRef()

    const test = () => {
        myComponentRef.current.handleName()
    }

    return(
        <div className="app">
            {console.log(myComponentRef)}
            <Titr/>
            <Form ref={myComponentRef}/>
            <button onClick={test}>test</button>
        </div>
    )
}

export default App