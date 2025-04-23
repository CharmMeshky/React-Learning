// Use effect = hoke charkheye hayat
import React, { useEffect, useState } from "react";
import { Moarefy } from "./Moarefy";
import { Welcome } from "./Welcome";
import { Timer } from "./Timer";
import "./index.css";

export const App = () => {
  // const [hello, setHello] = useState("hello Amir");
  const [isLight, setIslight] = useState(false);
  const [title, setTitle] = useState("Light");

  useEffect(() => {
    // baraye avalin bar gharare etefagh biofte
    console.log("its componentDidMount")
  },)

  useEffect(() => {
    // baraye uppdate 
    console.log("isLight chenged..!")
  }, [isLight])

  useEffect(() => {
    // baraye bastane component
    return () =>{
      console.log("m")
    }
  })
  
  // const kali = () => {
  //   setHello("hello mr Babaei");
  // };

  const setBackground = () => {
    if (isLight == false) {
      setTitle("black");
    } 
    else {
      setTitle("Light");
    }
    setIslight(!isLight);
  };

  return (
    <div
      id="rooty"
      style={{
        backgroundColor: isLight ? "white" : "black",
        transition: "0.5s  all",
      }}
    >
      <div className="text">
        <div className="flex">
          {/* <Moarefy setHello={kali} title={hello} /> */}
          <Moarefy/>
          <Welcome />
          <Timer
            setBackground={setBackground}
            isLight={isLight}
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

