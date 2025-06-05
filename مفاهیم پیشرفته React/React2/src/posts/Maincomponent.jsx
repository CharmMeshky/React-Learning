import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const Highercomponent = (MainComponent) => {
  const Newcomponent = () => {
    const [number, setNumber] = useState(0);

    const handleIncreseNumber = () => {
      setNumber(number + 1);
    };

    return <MainComponent handleIncreseNumber = {handleIncreseNumber} number = {number} />;
  };
  return Newcomponent;
};

export default Highercomponent;
