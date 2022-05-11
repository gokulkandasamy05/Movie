import React from "react";
import '../css/deskNav.css'
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DeskNav = () => {
  return (
    <div className="navBar desktop-navBar">
    
        <Link to='/' className="navBar-title"><p>Movieverse</p></Link>
    
      <div className="links">
        <Link className="navBar-link" to="/">
          Home
        </Link>
        <div className="movieList-sec">
          <p className="navBar-link movie">
            Movies
          </p>
          <div className="movieList">
            <Link className="movieList-link" to="movies">
              All movies
            </Link>
            <Link className="movieList-link" to="favourite">Favourite</Link>
          </div>
        </div>
        {/* <Link className="navBar-link" to="bookticket">
          Book ticket
        </Link> */}
      </div>
    </div>
  );
};

export default DeskNav;
