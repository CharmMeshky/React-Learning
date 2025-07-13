import { createPortal } from "react-dom";

const Portal = () => {
  return createPortal(
    <div className="modal-box"><div className="text-modal">m</div></div>,
    document.getElementById("portal-root")
  );
};

export default Portal;
