import { useState } from "react";
import "./index.css";

export const List = (props) => {

  const [check,setCheked] = useState(false)
  const [close, setClose] = useState(false)

  const removeList = (even) => {
    {
      const li = even.target.parentElement.parentElement.parentElement;
      li.remove();
    }
  };

  const cheked = (even) => {
    const li = even.target.parentElement.parentElement.parentElement;
    setCheked(!check)
    setClose(!close)
    if(check){
      {
        li.style.opacity = "0.5"
        li.style.textDecoration = "line-through"
      }
    }
    else{
      {
        li.style.opacity = "1"
        li.style.textDecoration = "none"
        li.style.backgroundColor = "#9795a2"
      }
    }
  }

  const clsed = (even) => {
    const li = even.target.parentElement.parentElement.parentElement;
    setClose(!close)
    setCheked(!check)
    if(close){
      {
        li.style.opacity = "0.5"
        li.style.textDecoration = "line-through "
        li.style.backgroundColor = "red"
      }
    }
    else{
      {
        li.style.opacity = "1"
        li.style.textDecoration = "none"
        li.style.backgroundColor = "#9795a2"

      }
    }
  }

  if(props.list.length){
  return (
          <div className="list">
      <ul>
        {props.list.map((element, index) => (
          <li key={index}>
            <div className="buttons">
              <button onClick={removeList}>
                <i className="material-icons delete">delete</i>
              </button>
              <button onClick={clsed}>
                <i className="material-icons close">close</i>
              </button>
              <button onClick={cheked}>
                <i className="material-icons check">check</i>
              </button>
            </div>
            <p>{element}</p>
          </li>
        ))}
      </ul>
    </div>
  );}
  else{
    return(
    <h4 className="khali">هیچ کاری وارد نشده است</h4>
    )
  }
};
