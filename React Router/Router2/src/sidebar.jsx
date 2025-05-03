import profileImage from "./imgs/photo_2024-12-20_18-53-08.jpg";
import menuData from "./context";
import { Link } from 'react-router'
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
      class={`material-icons menu ${
        clickMenu ? "clicked-menu" : "not-clicked-menu"
      }`}
      onClick={handleClickMenu}
    >
      menu
    </i>
  </div>
    <div className={`sidebar ${clickMenu? "clicked-sidebar" : "not-clicked-sidebar"}`}>
      <div className="img">
        <img src={profileImage} alt="Profile" />
      </div>
      <ul>
        <li>
          <Link to="/users">کاربران</Link>
        </li>
        <li>
          <Link to="/posts">پست ها</Link>
        </li>
        <li>
          <Link to="/gallery">گالری</Link>
        </li>
        <li>
          <Link to="/todo">کارها</Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
