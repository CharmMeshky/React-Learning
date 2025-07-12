import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { deleteServise, getUser } from "./userServise";

// let baseUser = []

const Users = () => {
  const nav = useNavigate();
  const [users, setUser] = useState([]);
  const [baseUser, setBaseUser] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getUser(setUser, setBaseUser);
  }, []);

  const searchHandle = (search) => {
    setSearchValue(search);
    const filterUserName = baseUser.filter((user) => {
      return user.username.toLowerCase().includes(search.toLowerCase())
    })
    setUser(filterUserName)
  }

  const deleteHandle = (idUser) => {
    Swal.fire({
      title: " ! حدف کاربر",
      text: `آیا از حذف کاربر شماره ${idUser} مطمین هستید؟`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ok ",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteServise(users, setUser, idUser);
      } else {
        Swal.fire({
          title: "شما از حذف کاربر منصرف شدید",
        });
      }
    });
  };

  return (
    <>
      <div className="content">
        <h1>مدیریت کاربران</h1>
        <div className="search">
          {/* <Link to="/users/add"> */}
          <i
            className="material-icons add"
            onClick={() => {
              // action...
              return nav("/users/add");
            }}
          >
            add
          </i>
          {/* </Link> */}
          <input 
            type="search" 
            placeholder="جست و جو" 
            value={searchValue}
            onChange={(e) => {searchHandle(e.target.value)}} 
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
                          phone: user.phone
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

export default Users;
