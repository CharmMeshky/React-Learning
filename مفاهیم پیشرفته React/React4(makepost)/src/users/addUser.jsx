import { useState } from "react";
import {useLocation, useNavigate, useParams } from "react-router";
import { Outlet } from "react-router";
import { add, editServise } from "./userServise";

const Add = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const editData = useLocation().state

  const [data,setData] = useState({
    name: editData ? editData.name : "",
    userName: editData ? editData.userName : "",
    email: editData ? editData.email : "",
    addres: {
      city: editData ? editData.city : "",
      yourAddres: editData ? editData.yourAddres : "",
      postCode: editData ? editData.postCode : "",
      phone: editData ? editData.phone : "",
    }
  })

  const handleData = (event) => {
    event.preventDefault();
    if(editData){
     editServise(data,id)
    }
    else{
      add(data)
    }
    navigate('/users')
  };

  return (
    <>
      <h1 className="afzodan">{id ? "ویرایش کاربر" : "افزودن کاربر"}</h1>
      <div className="addPage">
        <form onSubmit={handleData}>
          <div>
            <label htmlFor="name">نام و نام خانوادگی</label>
            <input id="name" type="text" className="person" required value={data.name} onChange={(e) => setData({...data, name:e.target.value})} />
            <label htmlFor="username">نام کاربری</label>
            <input id="username" type="text" className="person" required value={data.userName}  onChange={(e) => setData({...data, userName:e.target.value})} />
            <label htmlFor="email">ایمیل</label>
            <input id="email" type="email" className="person" required value={data.email}  onChange={(e) => setData({...data, email:e.target.value})} />
          </div>
          <label htmlFor="addres">آدرس</label>
          <div className="main-addres">
            <input
            required
              id="addres"
              type="text"
              className="addres"
              placeholder="شهر"
              value={data.addres.city}
              onChange={e => setData({...data, addres: {...data.addres, city: e.target.value}}) }
            />
            <input
            required
              id="addres"
              type="text"
              className="addres"
              placeholder="ادرس محل"
              value={data.addres.yourAddres}
              onChange={(e) => {
                setData({...data, addres: {...data.addres, yourAddres: e.target.value}})
              }}
            />
            <input
            required
              id="addres"
              type="text"
              className="addres"
              placeholder="کدپستی"
              value={data.addres.postCode}
              onChange={e => setData({...data, addres: {...data.addres, postCode: e.target.value}})}
            />
            <input
            required
              id="addrrs"
              type="text"
              className="addres"
              placeholder="شماره تلفن خانه"
              value={data.addres.phone}
              onChange={e => setData({...data, addres: {...data.addres, phone: e.target.value}})}
            />
          </div>
          <div className="sub-form">
            <div>
              <input
              required
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
