import { useContext } from "react"
import { Rezome } from "./rezome"
import { colorContext, testContext } from "./Testcontext"

export const List = (props) => {
    const contex = useContext(testContext)
    const mycolorContext = useContext(colorContext)

    return(
        <ul>
            <li>{`To ${props.second} S hast ke injaii`}</li>
            <li style={{backgroundColor : mycolorContext, color : contex.color}}>{`To ${contex.second} S hast ke injaii`}</li>
            <li><Rezome/></li>
        </ul>
    )
}