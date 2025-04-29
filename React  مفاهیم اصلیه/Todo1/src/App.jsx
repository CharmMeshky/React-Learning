// eslint-disable-next-line no-unused-vars
import { tackdata } from "./context";
import { List } from "./list";
import { Titr } from "./Titr";
import { Inputs } from "./inputs";
import "./index.css";
import { useState } from "react";

export const App = () => {
    const [Tack, setTack] = useState([])

  return (
    <div className="app">
        <Titr />
      <tackdata.Provider value={{Tack : Tack, setTack : setTack}}>
        <Inputs />
        <List/>
      </tackdata.Provider>
    </div>
  );
};
