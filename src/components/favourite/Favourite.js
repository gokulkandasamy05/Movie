import React, { useEffect, useState } from "react";
import MovieCard from "../trending/MovieCard";
import "../css/moviecard.css";
import "../css/favourite.css";

const Favourite = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    getFunc();
  }, [movie]);

  const getFunc = () => {
    let data = localStorage.getItem("data");
    setMovies(JSON.parse(data));
  };

  const removeHandler = () => {
    localStorage.clear();
    getFunc();
  };

  return (
    <>
      <div className="removeAll">
        <button className="trashBtn"onClick={removeHandler}>
          <p>remove all</p>
          <i className="fa-solid fa-trash trashIcon"></i>
        </button>
      </div>
      <div className="favourite-sec">
        {movie?.length ? (
          movie.map((e, i) => {
            const datas = {
              name: "movies",
              title: e.title,
              id: e.id,
              src: e.poster,
              desc: e.desc,
              src1: e.backdrop,
              date: e.date,
              favBtn: true,
              genre_ids:e.genre_ids
            };

            return <MovieCard key={datas.title} {...datas}></MovieCard>;
          })
        ) : (
          <p style={{ fontSize: "1rem", color: "white" }}>No Favourites</p>
        )}
      </div>
    </>
  );
};

export default Favourite;
