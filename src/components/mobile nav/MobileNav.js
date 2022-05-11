import { React, useState } from "react";
import "../css/mobileNav.css";
import MobileNavLinks from "../mobile nav/MobileNavLinks"
import {Link} from 'react-router-dom'



const MobileNav = () => {
  const [icon, setIcon] = useState(false);

  const hamFunc = () => {
    setIcon(true);
  };
  const canFunc = () => {
    setIcon(false);
  };
  

  return (
    <div className="navBar mobile-navBar">
      <div className="navBar-sec">
        <Link to='/' className="navBar-sec--title"><p>Movieverse</p></Link>
        <div className="navBar-sec--icons">
          {icon ? (
            <i
              className="fa-solid fa-xmark hamIcon"
              onClick={canFunc}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars canIcon"
              onClick={hamFunc}
            ></i>
          )}
        </div>
      </div>
      <MobileNavLinks icon={icon}></MobileNavLinks>
    </div>
  );
};

export default MobileNav;
