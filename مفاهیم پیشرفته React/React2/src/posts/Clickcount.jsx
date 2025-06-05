import Highercomponent from "./Maincomponent"

export const Clickcount = (props) => {
    
    return(
        <button onClick={props.handleIncreseNumber}>click : {props.number}</button>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default Highercomponent(Clickcount)