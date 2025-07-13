import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deletePost, getPosts } from "./PostsServise";

const Post = () => {
  const nav = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [postsData, setPostsData] = useState();
  const [clickComments, setClickComments] = useState(false)
  const [posts, setPosts] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    getPosts(setPosts, setPostsData);
  }, []);

  const searchHandle = (search) => {
    setSearchValue(search);
    const postSearch = postsData.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
    setPosts(postSearch);
  };

  const deleteHandle = async (id) => {
    deletePost(id, posts, setPosts);
  };

  const handleComments = () => {
    setClickComments(!clickComments)
  }

  return (
    <div className="post">
      <h1 className="hNav">مدیریت پست ها</h1>
      <div className="content">
        <div className="search">
          <i
            className="material-icons add"
            onClick={() => {
              return nav("/posts/add");
            }}
          >
            add
          </i>
          <input
            type="search"
            placeholder="جست و جو"
            value={searchValue}
            onChange={(e) => {
              searchHandle(e.target.value);
            }}
          />
        </div>
      </div>
      {posts.length ? (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>عملیات</th>
                <th>متن</th>
                <th>موضوع</th>
                <th>آی دی کاربر</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <div className="buttons">
                      <i
                        className="material-icons delete"
                        onClick={() => {
                          deleteHandle(post.id);
                        }}
                      >
                        delete
                      </i>
                      <Link
                        to={`/posts/add/${post.id}`}
                        state={{
                          id: post.id,
                          userId: post.userId,
                          title: post.title,
                          body: post.body,
                        }}
                      >
                        <i className="material-icons edit">edit_square</i>
                      </Link>
                      <i className="material-icons forum" onClick={handleComments}>forum</i>
                    </div>
                  </td>
                  <td className="paragraf">{post.body}</td>
                  <td>{post.title}</td>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="weit">
          <h1>{searchValue ? "نتیجه ای یافت نشد" : " ... لطفا صبر کنید"}</h1>
        </div>
      )}
      <div className="modal" style={{display: clickComments ? "inline-block" :"none"}}>
      </div>
      </div>
  );
};

export default Post;
