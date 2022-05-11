import React from "react";
import { Link } from "react-router-dom";
import '../css/moviecard.css';



const MovieCard = ({ id, name, title, src, desc, src1, date,favBtn, genre_ids,vote_average}) => {
 
  const imgHandler = (e) => {
    return title;
  };


  let data = {
    title: imgHandler(),
    poster: src,
    backdrop: src1,
    date,
    desc,
    id,
    favBtn,
    genre_ids
  };


  const trashHandler = () => {
    const arr = JSON.parse(localStorage.getItem('data'))
    let item = arr.filter((e) => e.title !== title)
    localStorage.setItem('data', JSON.stringify(item))
  }

  return (
    <>
      <div key={id} className={`${name}-movie`} title={title}>
        <div className={`${name}-movie--sec`}>
          <Link
            to={`/${!favBtn ? 'movies' :'favourite'}/${title}`}
            state={{
              ...data
            }}
          >
            <img
              onClick={imgHandler}
              className={`${name}-movie--image`}
              src={src}
              alt={title}
            ></img>
          </Link>
          
        </div>
        <p className={vote_average ? "voteAvg": 'voteAvgNone'}>{vote_average ? vote_average.toFixed(1) : ''}</p>
        <div className={`${name}-movie--title`}>
          <p>{title}</p>
        </div>
        <i className="fa-solid fa-trash-can trashIcon" title='Delete' onClick={trashHandler}></i>
      </div>
      
    </>
  );
};

export default MovieCard;
