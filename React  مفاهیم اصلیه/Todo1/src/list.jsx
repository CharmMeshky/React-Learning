/* eslint-disable no-unused-vars */
// import { useState } from "react";
import { buttonsClick } from "./context";
import { Buttons } from "./buttons";
import { tackdata } from "./context";
import { useContext} from "react";
import "./index.css";

export const List = () => {

  const { setTack,Tack  } = useContext(tackdata);
 
  const removeTack = (id) => {
    const newTack = Tack.filter((a) => {
      return a.id != id
    })
    setTack([...newTack])
  }

  const closeTack = (id, className) => {
    let index = Tack.findIndex((item) => (item.id === id))
    const newTack = [...Tack]
    newTack[index].done = true
    newTack[index].className = "closeClass"
    setTack(newTack)
    console.log(Tack)
  }

  const checkTack = (id, className) => {
    let index = Tack.findIndex((item) => (item.id === id))
    const newTack = [...Tack]
    newTack[index].done = false
    newTack[index].className = "checkClass"
    setTack(newTack)
    console.log(Tack)
  }

  if(Tack.length){
    return (
      <div className="list">
        <ul>
          {Tack.map((element) => (
            <li key={element.id} className={element.className}>
              <div className="buttons">
                <button>
                  <i className="material-icons delete" onClick={() => {removeTack(element.id)}}>delete</i>
                </button>
                <buttonsClick.Provider value={{done : element.done,fCheck : checkTack, fClose : closeTack, id : element.id,className : element.className}}>
                  <Buttons/>
                </buttonsClick.Provider>
              </div>
              <p>{element.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  else{
    return(<h4 className="khali" >هنوز کاری  وارد نشده است</h4>)
  }
};
