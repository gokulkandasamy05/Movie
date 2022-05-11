import React from "react";
import image from '../assets/noimage.png'

const ProfileCard = ({id,character,credit_id,name,profile_path,job}) => {
  return (
    <div className="profilecard-sec">
    <div className="ProfileCards">
      <div className="profile-card">
        <div className="profile-card--image">
          <img
            className="profile-card--img"
            src={ profile_path ? `https://image.tmdb.org/t/p/w154/${profile_path}` : image}
            alt={name}
          ></img>
        </div>
      </div>
      <div className="profile-card--names">
        <h4 className="profile-card--name">
          {name}
        </h4>
        {character ? <p className="profile-card--charName">{character}</p> : ''}
        {job ? <p className="profile-card--charName">{job}</p> : ''}
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;
