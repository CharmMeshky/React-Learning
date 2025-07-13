import profileImage from "./imgs/photo_2024-12-20_18-53-08.jpg";
import {menuData} from "./context";
import { Link, NavLink } from "react-router";
import { useContext } from "react";

const Sidebar = () => {
  const { clickMenu, setMenu } = useContext(menuData);

  const handleClickMenu = () => {
    setMenu(!clickMenu);
  };

  return (
    <>
      <div className="menu-btn">
        <i
          className={`material-icons menu ${
            clickMenu ? "clicked-menu" : "not-clicked-menu"
          }`}
          onClick={handleClickMenu}
        >
          menu
        </i>
      </div>
      <div
        className={`sidebar ${
          clickMenu ? "clicked-sidebar" : "not-clicked-sidebar"
        }`}
      >
        <div className="img">
          <img src={profileImage} alt="Profile" />
        </div>
        <ul>
          <NavLink to="/users" className={({isActive}) => {return isActive ? "acNav" : ""}}>
            <li>کاربران</li>
          </NavLink>

          <NavLink to="/posts" className={({isActive}) => {return isActive ? "acNav" : ""}}>
            <li>پست ها</li>
          </NavLink>

          <NavLink to="/gallery" className={({isActive}) => {return isActive ? "acNav" : ""}}>
            <li>گالری</li>
          </NavLink>

          <NavLink to="/todo" className={({isActive}) => {return isActive ? "acNav" : ""}}>
            <li>کارها</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
