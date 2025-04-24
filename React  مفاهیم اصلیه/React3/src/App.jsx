/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Moarefy } from "./Moarefy";
import { Welcome } from "./Welcome";
import { Timer } from "./Timer";
import { timerData } from "./contexts";
import { List } from "./Timelist";
import { listdata } from "./contexts";
import "./index.css";

export const App = () => {
  
  const [isLight, setIslight] = useState(false);
  const [title, setTitle] = useState("Light");
  const [time, setTime] = useState([]);

  const setBackground = () => {
    if (isLight == false) {
      setTitle("black");
    } else {
      setTitle("Light");
    }
    setIslight(!isLight);
  };

  return (
    <timerData.Provider
      value={{
        setBackground,
        isLight,
        title,
        time,
        setTime,
      }}
    >
      <listdata.Provider
        value={{
          time,
          isLight,
          setTime,
        }}
      >
        <div
          id="rooty"
          style={{
            backgroundColor: isLight ? "white" : "black",
            transition: "0.5s  all",
          }}
        >
          <div className="text">
            <div className="flex">
              <Moarefy />
              <Welcome />
              <Timer />
              <List />
            </div>
          </div>
        </div>
      </listdata.Provider>
    </timerData.Provider>
  );
};
