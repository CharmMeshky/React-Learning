import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { commentsClick } from "../context";
import { getComments } from "./Modalservise";

const Portal = () => {
  const { setClickComments, clickComments } = useContext(commentsClick);
  const isClicked = clickComments.isClicked;
  const number = clickComments.number;

  const [commnetsFilter, setCommnetsFilter] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [comments, setComments] = useState({
    id: "",
    postId: "",
    name: "",
    email: "",
    body: "",
  });

  useEffect(() => {
    getComments(number, setCommnetsFilter, setComments);
  }, [isClicked]);

  // if (commnetsFilter) {
  return createPortal(
    <div className="modal-box" style={{ top: isClicked ? "0" : "-500px" }}>
      <div className="text-modal">
        {comments.length ? (
          <div className="table">
            <h1>{`کامنت پست شماره ${number}`}</h1>
            <table className="t-comment">
              <thead>
                <tr>
                  <th className="hashtag-p">#</th>
                  <th className="id-p">آی دی پست</th>
                  <th className="name-p">نام</th>
                  <th className="email-p">ایمیل</th>
                  <th className="body-p">متن</th>
                </tr>
              </thead>
              <tbody>
                <tr key={Math.random()}>
                  <td className="d">
                    {commnetsFilter ? commnetsFilter.id : ""}
                  </td>
                  <td className="d">
                    {commnetsFilter ? commnetsFilter.postId : ""}
                  </td>
                  <td>{commnetsFilter ? commnetsFilter.name : ""}</td>
                  <td>{commnetsFilter ? commnetsFilter.email : ""}</td>
                  <td>{commnetsFilter ? commnetsFilter.body : ""}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="close-modal"
              onClick={() =>
                setClickComments({ ...clickComments, isClicked: false })
              }
            >
              بستن
            </button>
          </div>
        ) : (
          <h2 className="pation">لطفا صبر بکنید</h2>
        )}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};
// };

export default Portal;
