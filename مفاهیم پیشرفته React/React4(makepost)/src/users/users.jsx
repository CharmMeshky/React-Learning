import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { deleteServise, getUser } from "./userServise";
import HocAlert from "../HOC/HocAlert";

// let baseUser = []

const Users = (props) => {
  const nav = useNavigate();
  const [users, setUser] = useState([]);
  const [baseUser, setBaseUser] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const {Alert, notif} = props

  useEffect(() => {
    getUser(setUser, setBaseUser);
  }, []);

  const searchHandle = (search) => {
    setSearchValue(search);
    const filterUserName = baseUser.filter((user) => {
      return user.username.toLowerCase().includes(search.toLowerCase());
    });
    setUser(filterUserName);
  };

  const deleteHandle = async (idUser) => {
    const res = await Alert(" ! حذف کاربر",`آیا از حذف کاربر شماره ${idUser} مطمعن هستید؟`,"warning")
    if (res.isConfirmed) {
      deleteServise(users, setUser, idUser);
    } else {
      notif("شما از حذف کاربر منصرف شدید","error")
    }
  };

  return (
    <>
      <div className="content">
        <h1>مدیریت کاربران</h1>
        <div className="search">
          <i
            className="material-icons add"
            onClick={() => {
              return nav("/users/add");
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
      {users.length ? (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>عملیات</th>
                <th>ایمیل</th>
                <th>نام کابری</th>
                <th>نام</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="buttons">
                      <i
                        className="material-icons delete"
                        onClick={() => {
                          deleteHandle(user.id);
                        }}
                      >
                        delete
                      </i>
                      <Link
                        to={`/users/add/${user.id}`}
                        state={{
                          name: user.name,
                          userName: user.username,
                          email: user.email,
                          city: user.address.city,
                          postCode: user.address.zipcode,
                          yourAddres: user.address.street,
                          phone: user.phone,
                        }}
                      >
                        <i className="material-icons edit">edit_square</i>
                      </Link>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.id}</td>
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
    </>
  );
};

export default HocAlert(Users);
