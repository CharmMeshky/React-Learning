import BaseCounter from "./Counter"
import { useContext } from "react";
import { countData } from "../context";

export const ClickCount = () => {

    const {handleClickButton,count} = useContext(countData)

    return(
        <div>
            <button onClick={handleClickButton}>count = {count}</button>
        </div>
    )
}

const ClickCountComponent = BaseCounter(ClickCount)

export default ClickCountComponent ;