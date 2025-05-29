import { forwardRef, useImperativeHandle, useState } from "react";

const Farzand = (p,ref) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1)
  }

  useImperativeHandle (ref,() => (count))

  return (
    <>
      <h2>iam a chiled component</h2>
      <button onClick={handleCount}>farzand is {count}</button>
    </>
  );
};

export default forwardRef(Farzand);
