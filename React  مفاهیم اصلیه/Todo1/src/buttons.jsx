import { useContext } from "react";
import { buttonsClick } from "./context";
import "./index.css";

export const Buttons = () => {
  const context = useContext(buttonsClick);
  if (context.done === false) {
    return (
      <button>
        <i
          className="material-icons close"
          onClick={() => {
            context.fClose(context.id,context.className);
          }}
        >
          close
        </i>
      </button>
    );
  } else if (context.done === true) {
    return (
      <button>
        <i
          className="material-icons check"
          onClick={() => {
            context.fCheck(context.id,context.className);
          }}
        >
          check
        </i>
      </button>
    );
  } else {
    return (
      <>
        <button>
          <i
            className="material-icons close"
            onClick={() => {
              context.fClose(context.id, context.className);
            }}
          >
            close
          </i>
        </button>
        <button>
          <i
            className="material-icons check"
            onClick={() => {
              context.fCheck(context.id, context.className);
            }}
          >
            check
          </i>
        </button>
      </>
    );
  }
};
