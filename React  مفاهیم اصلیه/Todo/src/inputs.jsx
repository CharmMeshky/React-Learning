import { useState } from "react";
import { List } from "./list";
// import { useEffect } from "react";
import "./index.css";

export const Inputs = () => {
  const [work, setWork] = useState("");
  const [list, setList] = useState([]);

//   useEffect(() => {
//     console.log('list amade ersal:', list);
// }, [list]);

  const handleInputChange = (e) => {
    setWork(e.target.value);
  };

  const handleSubmit = () => {
    if (work.trim()) {  // Baraye inke meghdar khali be list ezafe nashe
      setList((prewDefault) =>  [...prewDefault,work]);
      setWork("");
    }
  };

  return (
    <>
      <div className="add">
        <button onClick={handleSubmit}>ثبت</button>
        <input
          type="text"
          placeholder="یک کار جدید اضافه کنید"
          value={work}
          onChange={handleInputChange}
        />
      </div>
      <List list={list} />
    </>
  );
};
