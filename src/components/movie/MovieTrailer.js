import React from "react";

const MovieTrailer = ({func}) => {

  return (
    <button className="movie-trailer--btn" onClick={func}>
      <i className="fa-solid fa-play playIcon"></i>
      <p className="watch-trailer">Trailer</p>
    </button>
  );
};

export default MovieTrailer;
