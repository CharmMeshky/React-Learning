/* eslint-disable react-refresh/only-export-components */
import Highercomponent from "./Maincomponent"

export const Mousecount = (props) => {

    const {number, handleIncreseNumber} = props
    
    return(
        <button onMouseEnter={handleIncreseNumber}>click : {number}</button>
    )
}

export default Highercomponent(Mousecount)