import profileImage from "./imgs/photo_2024-12-20_18-53-08.jpg";
import { useContext } from "react";
import menuData from "./context";

const Sidebar = () => {
  const {clickMenu} = useContext(menuData)

  return (
    <div className={`sidebar ${clickMenu? "clicked-sidebar" : "not-clicked-sidebar"}`} style={{display:clickMenu? "inline-block" : "none"}} >
      <div className="img">
        <img src={profileImage} alt="Profile" />
      </div>
      <ul>
        <li>
          <a href="">کاربران</a>
        </li>
        <li>
          <a href="">پست ها</a>
        </li>
        <li>
          <a href="">گالری</a>
        </li>
        <li>
          <a href="">کارها</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
