import React from "react";
import { Link } from "react-router-dom";
import "../css/mobilenavLinks.css";



const MobileNavLinks = ({icon}) => {
    
  return (
    <div className={icon ? "navBar-links navBar-anime":"navBar-links navBar-anime--reverse"}>
        <Link className="navBar-link" to="/">Home</Link>
        <p className="navBar-link ">Movies</p>
        <ul className="navBar-Linklist">
            <li><Link className="navBar-link" to="movies">All movies</Link></li>
            <li><Link className="navBar-link" to="favourite">Favourite</Link></li>
        </ul>
        {/* <Link className="navBar-link" to="bookticket">Book ticket</Link> */}
    </div>
  );
};

export default MobileNavLinks;
