// import { useContext } from "react";
// import menuData from "../context";

const Users = () => {



  return (
    <>
      <div className="content">

        <h1>مدیریت کاربران</h1>
        <div className="search">
          <i class="material-icons add">add</i>
          <input type="search" placeholder="جست و جو" />
        </div>
      </div>
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
            <tr>
              <td>
                <div className="buttons">
                  <i class="material-icons delete">delete</i>
                  <i class="material-icons edit">edit_square</i>
                </div>
              </td>
              <td>CharmMeshky@gmail.com</td>
              <td>CharmMeshky</td>
              <td>amir</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
