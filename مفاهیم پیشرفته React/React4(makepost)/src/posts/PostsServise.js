import Swal from "sweetalert2";
import { axiosJp } from "../axios";

export const getPosts = (setPosts, setPostsData) => {
  axiosJp.get("/posts").then((res) => {
    setPosts(res.data);
    setPostsData(res.data);
  });
};

export const deletePost = (id, posts, setPosts) => {
  return Swal.fire({
    title: "! اخطار",
    text: ` آیا میخواهید کاربر شماره ${id} را حذف کنید؟`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "green",
    cancelButtonColor: "#d33",
    confirmButtonText: "تایید",
    cancelButtonText: "لغو",
  }).then((result) => {
    if (result.isConfirmed) {
      axiosJp.delete(`/posts/${id}`).then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "!حذف شد",
            text: ".کاربر مورد نظر حذف شد",
            icon: "success",
            confirmButtonColor: "green",
            confirmButtonText: "تایید",
          });
          const newPosts = posts.filter((post) => {
            return post.id !== id;
          });
          setPosts(newPosts);
        } else {
          Swal.fire({
            title: "مشکلی پیش آمده!",
            text: `حذف کاربر شماره ${id} با خطا مواجه شده است`,
            icon: "error",
            confirmButtonColor: "green",
            confirmButtonText: "تایید",
          });
        }
      });
    } else {
      Swal.fire({
        confirmButtonColor: "green",
        confirmButtonText: "تایید",
        title: " ! لغو شد",
        icon: "error",
      });
    }
  });
};

export const putPosts = (id) => {
  axiosJp.put(`posts/${id}`).then((res) => {
    if (res.status === 200) {
      Swal.fire({
        title: ".ویرایش انجام شد",
        text: `پست شماره ${id} .ویرایش شد`,
        icon: "success",
        confirmButtonColor: "green",
        confirmButtonText: "تایید",
      });
    } else {
      Swal.fire({
        title: "!مشکلی پیش آمده ",
        text: `.ویرایش پست شماره ${id} با خطا مواجه شده است`,
        icon: "error",
        confirmButtonColor: "green",
        confirmButtonText: "تایید",
      });
    }
  });
};

export const postData = (data) => {
  axiosJp.post(`posts`, data).then((res) => {
    if (res.status === 201) {
      Swal.fire({
        title: ".پست جدید ثبت شد",
        icon: "success",
        confirmButtonColor: "green",
        confirmButtonText: "تایید",
      })
    }
    else{
        Swal.fire({
        title: "خطا",
        text: ".ساخت پست جدید با خطا روبه رو شد ",
        icon: "error",
        confirmButtonColor: "green",
        confirmButtonText: "تایید",
      });
    }
  });
};
