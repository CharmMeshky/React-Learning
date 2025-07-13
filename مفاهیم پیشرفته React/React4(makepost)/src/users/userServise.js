import Swal from "sweetalert2";
import { axiosJp } from "../axios";

export const deleteServise = async (users, setUser, idUser) => {
  axiosJp.delete(`/users/${idUser}`).then((res) => {
    if (res.status === 200) {
      const newUsers = users.filter((user) => {
        return user.id !== idUser;
      });
      setUser(newUsers);
      Swal.fire({
        title: "! حذف شد",
        text: "شما این کاربر را حذف کردید",
        icon: "success",
        confirmButtonColor: "green",
        confirmButtonText: "تایید"
      });
    } else {
      Swal.fire({
        title: "Eror",
        text: "! عملیات با موفقیت انجام نشد",
        icon: "warning",
      });
    }
  });
};

export const getUser = async (setUser, setBaseUser) => {
  axiosJp
    .get("/users")
    .then((res) => {
      setUser(res.data), setBaseUser(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editServise = async (data, id) => {
  axiosJp.put(`/users/${id}`, data).then((res) => {
    console.log(res);
    Swal.fire({
      title: "ویرایرش با موفقیت انجام شد",
      icon: "success",
      draggable: true,
    });
  });
};

export const add = async (data) => {
    axiosJp.post('/users', data)
      .then((res) => {
        console.log(res)
        Swal.fire({
          title: "کاربر با موفقیت اضافه شد",
          icon: "success",
          draggable: true
        });
      })
}
