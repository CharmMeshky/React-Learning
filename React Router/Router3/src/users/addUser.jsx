// import { useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Outlet } from "react-router";

const Add = () => {
  // const [formData, setForm] = useState([]);
  // const name = useRef();
  // const userName = useRef();
  // const email = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const params = useLocation()
  console.log(params)  //params.state, state in navigate : {frameWork : "react", developer : 'aimr'}, state in Link : amirrr

  const handledata = (event) => {
    event.preventDefault();
  //   const newUser = {
  //     nameValue: name.current.value,
  //     emailValue: email.current.value,
  //     userNameValue: userName.current.value,
  //   };
  //   setForm((prevFormData) => [...prevFormData, newUser]);

  //   name.current.value = "";
  //   email.current.value = "";
  //   userName.current.value = "";
  };

  return (
    <>
      <h1 className="afzodan">{id ? "ویرایش کاربر" : "افزودن کاربر"}</h1>
      <div className="addPage">
        <form onSubmit={handledata}>
          <div>
            <label htmlFor="name">نام و نام خانوادگی</label>
            <input id="name" type="text" className="person" />
            <label htmlFor="username">نام کاربری</label>
            <input id="username" type="text" className="person" />
            <label htmlFor="email">ایمیل</label>
            <input id="email" type="email" className="person" />
          </div>
          <label htmlFor="addres">آدرس</label>
          <div className="main-addres">
            <input
              id="addres"
              type="text"
              className="addres"
              placeholder="شهر"
            />
            <input
              id="addres"
              type="text"
              className="addres"
              placeholder="ادرس محل"
            />
            <input
              id="addres"
              type="text"
              className="addres"
              placeholder="کدپستی"
            />
            <input
              id="addrrs"
              type="text"
              className="addres"
              placeholder="شماره تلفن خانه"
            />
          </div>
          <div className="sub-form">
            <div>
              <input
                type="submit"
                className="sub"
                value={id ? "ویرایش" : "ثبت کردن"}
              />
              <input type="reset" className="res" value="برگشت"
               onClick={() => {navigate(-1)}}
              />
            </div>
          </div>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default Add;
