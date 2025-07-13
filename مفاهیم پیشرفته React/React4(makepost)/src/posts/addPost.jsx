import { useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { postData, putPosts } from "./PostsServise";

const AddPost = () => {
  const editData = useLocation().state;
  const { postId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    id: editData ? editData.id : "",
    userId: editData ? editData.userId : "",
    title: editData ? editData.title : "",
    body: editData ? editData.body : "",
  });

  const handleData = (e) => {
    e.preventDefault();
    if (editData) {
      putPosts(editData.id);
    } else {
      postData(data);
    }
    navigate("/posts")
  };

  return (
    <>
      <h1 className="afzodan">{postId ? "ویرایش پست" : "افزودن پست"}</h1>
      <div className="addPage">
        <form onSubmit={handleData}>
          <div>
            <label htmlFor="title">موضوع</label>
            <input
            required
              id="title"
              type="text"
              className="person"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <label htmlFor="id">آی دی</label>
            <input
            required
              id="id"
              type="number"
              className="person"
              value={data.id}
              onChange={(e) => setData({ ...data, id: e.target.value })}
            />
            <label htmlFor="userId">آی دی کاربری</label>
            <input
            required
              id="userId"
              type="number"
              className="person"
              value={data.userId}
              onChange={(e) => setData({ ...data, userId: e.target.value })}
            />
            <label htmlFor="body">متن</label>
            <input
            required
              id="body"
              type="text"
              className="person"
              value={data.body}
              onChange={(e) => setData({ ...data, body: e.target.value })}
            />
          </div>
          <div className="sub-form">
            <div>
              <input
              required
                type="submit"
                className="sub"
                value={postId ? "ویرایش" : "ثبت کردن"}
              />
              <input
              required
                type="reset"
                className="res"
                value="برگشت"
                onClick={() => {
                  navigate(-1);
                }}
              />
            </div>
          </div>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default AddPost;
