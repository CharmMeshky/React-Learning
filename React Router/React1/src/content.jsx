import { useState } from "react";
import Sidebar from "./sidebar";
// eslint-disable-next-line no-unused-vars
import menuData from "./context";
import Users from "./users/users";

const Content = () => {
  const [clickMenu, setMenu] = useState(false);

  const handleClickMenu = () => {
    setMenu(!clickMenu);
  };

  return (
    <>
      <div className="content">
        <div className="menu-btn">
          <i class= {`material-icons menu ${clickMenu? "clicked-menu" : "not-clicked-menu"}`} onClick={handleClickMenu}>
            menu
          </i>
        </div>
        <h1>مدیریت کاربران</h1>
        <div className="search">
          <i class="material-icons add">add</i>
          <input type="search" placeholder="جست و جو" />
        </div>
        <div className="table">
          <Users/>
        </div>
      </div>
      <menuData.Provider value={{clickMenu}}>
        <Sidebar />
      </menuData.Provider>
    </>
  );
};

export default Content;
