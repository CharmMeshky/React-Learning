import { axiosJp } from "../axios";

export const getComments = async (number,setCommnetsFilter,setComment) => {
  const response = await axiosJp.get("/comments");
  setComment(response.data)
  const comments = response.data
  const getSelectedComment =comments.filter((com) => {
    return com.id === number;
  });
  setCommnetsFilter(...getSelectedComment);
  console.log(getSelectedComment)
};
