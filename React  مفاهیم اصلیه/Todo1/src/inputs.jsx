import { useContext, useState } from "react";
import { tackdata } from "./context";
import { List } from "./list";
import "./index.css";

export const Inputs = () => {
  const [newTack ,setNewTack] = useState("")
  const {Tack,setTack} = useContext(tackdata)

  const getInputValue = (even) => {
    setNewTack(even.target.value)
  }

  const addTack = () => {
    if(newTack.trim()){
      setTack(prew => [...prew,{id : Math.random(), title : newTack, done : null,className : "defaul"}])
      setNewTack("")
    }
  }

  return (
    <>
      <div className="add">
        <button onClick={addTack}>ثبت</button>
        <input
          type="text"
          placeholder="یک کار جدید اضافه کنید"
          value={newTack}
          onChange={getInputValue}
        />
      </div>
    </>
  );
};
