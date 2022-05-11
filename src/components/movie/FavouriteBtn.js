import React from "react";

const FavouriteBtn = (props) => {
  return (
    <button className="addFavourite--btn" onClick={props.func}>
      <i className="fa-solid fa-list favIcon"></i>
      <p className="addFavourite">Favourite</p>
    </button>
  );
};

export default FavouriteBtn;
