import { useContext } from "react";
import { listdata } from "./contexts";
import "./index.css";

export const Moarefy = () =>{
  const context = useContext(listdata)

  return (
    <>
    <h1 className="hello" style={{color: context.isLight? "black" : "rgb(170, 128, 12)"}}>hello my friend</h1>
    </>
    )
}



