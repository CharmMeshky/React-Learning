import { useContext, useEffect } from "react";
import { listdata } from "./contexts";
// import styled from "styled-components"

export const List = () => {

  const Time = useContext(listdata);

  useEffect(() => {
    const listTime = document.querySelector(".list-time");
    
    const handleClick = (e) => {
      if (e.target.classList.contains('time-item')) {
        e.target.remove();
      }
    };

    listTime.addEventListener("click", handleClick);

    // Cleanup function
    return () => {
      listTime.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div className="main">
      <div className="list-time">
        {Time.time.map((time, index) => (
          <div
            key={index}
            className="time-item"
            style={{
              backgroundColor: Time.isLight
                ? "black"
                : "rgba(123, 123, 123, 0.5)",
            }}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};
