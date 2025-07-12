import { useContext } from "react";
import { countData } from "../context";
import BaseCounter from "./Counter";

export const MouseCount = () => {
  const { handleMouseCount, count } = useContext(countData);
  return (
    <div>
      <button onMouseEnter={handleMouseCount}>
        count = {count}
      </button>
    </div>
  );
};

const MouseCountComponent = BaseCounter(MouseCount);
export default MouseCountComponent;
