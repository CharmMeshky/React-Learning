import { Link, useNavigate } from "react-router";
import Swal from 'sweetalert2'

const Users =() => {
  const nav = useNavigate()

  const deleteHandle = (idUser) => {
    Swal.fire({
  title: "حدف کاربر!",
  text: `آیا از حذف کاربر شماره ${idUser} مطمین هستید؟`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "ok !"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "شما این کاربر را حذف کردید.",
      icon: "success"
    });
  }
});
  }

  return (
    <>
      <div className="content">
        <h1>مدیریت کاربران</h1>
        <div className="search">
          {/* <Link to="/users/add"> */}
            <i className="material-icons add" onClick={() => {
              // action...
              return nav("/users/add", {state : {frameWork : "react", developer : 'aimr'}})
            }}>add</i>
          {/* </Link> */}
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
                  <i className="material-icons delete"
                  onClick={() => {deleteHandle(1)}}
                  >delete</i>
                  <Link to="/users/add/2" state="amirrrr">
                    <i className="material-icons edit">edit_square</i>
                  </Link>
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
