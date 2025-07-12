import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { countData } from "../context";
// eslint-disable-next-line no-unused-vars
export const BaseCounter = (MainComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const handleClickButton = () => {
      setCount(count + 1);
    };

    const handleMouseCount = () => {
      setCount(count + 1);
    };

    return (
      <countData.Provider
        value={{
          count: count,
          handleClickButton: handleClickButton,
          handleMouseCount: handleMouseCount,
        }}
      >
        <MainComponent />
      </countData.Provider>
    );
  };
  return NewComponent;
};

export default BaseCounter;
