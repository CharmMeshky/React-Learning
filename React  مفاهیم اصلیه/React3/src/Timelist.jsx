import { useContext, useEffect } from "react";
import { listdata } from "./contexts";
// import styled from "styled-components"

export const List = () => {

  const Time = useContext(listdata);

  useEffect(() => {
    const listTime = document.querySelector(".list-time");
    
    const handleClick = (e) => {
      if (e.target.classList.contains('hover')) {
        e.target.parentElement.remove()
      }
    };

    listTime.addEventListener("click", handleClick);

    return () => {
      listTime.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="main">
      <div className="list-time ">
        {Time.time.map((time, index) => (
          <div className="time-item"  key={index}
            style={{
              backgroundColor: Time.isLight ? "black" : "rgba(123, 123, 123, 0.5)"}}
              >
            <div className="hover">
              {time} 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
