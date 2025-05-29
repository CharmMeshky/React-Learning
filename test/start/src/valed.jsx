import {useRef } from "react"
import Farzand from "./farzand"

const Valed = () => {
    const myComponentRef = useRef()

    const test = () => {
        console.log(myComponentRef.current)
    }

    return(
        <div>
            <h1>its father component</h1>
            <button onClick={test}>its valed</button>
            <Farzand ref= {myComponentRef}/>
        </div>
    )
}

export default Valed