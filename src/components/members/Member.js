import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiConfig, credit } from "../api";
import MovieCard from "../trending/MovieCard";
import "../css/moviecard.css";
import "../css/member.css";
import image from '../assets/noimage.png'

const Member = () => {
  const [mem, setMem] = useState([]);
  const [actor,setActor] = useState({});
  const location = useLocation();
  const { credit_id,id } = location.state;

  const { apiKey, getMember, image500, images, image154, } = {
    ...apiConfig,
    ...credit,
  };

  useEffect(() => {
    fetch(getMember(credit_id, apiKey))
      .then((res) => res.json())
      .then((data) => setMem(data));
      
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`)
    .then((res)=> res.json())
    .then((data) => setActor(data))
    
  }, []);

  console.log(actor);

  return (
    <section className="member-section">
      <div className="member-details">
        <div className="member-details--sec">
          <div className="member-details--image">
            <img
              className="member-details--img"
              src={actor.profile_path ? image154 + actor.profile_path : image}
              alt={actor.name}
            ></img>
          </div>
          <div className="member-details--desc">
            <h4 className="member-details--name">{actor.name}</h4>
            <p className="member-details--job">{mem?.job}</p>
            <p className="member-details--bday">{actor.birthday}</p>
            <p className="member-details--birthplace">{actor.place_of_birth}</p>
            <p className="member-details--popularity">
              popularity: {`${mem?.person?.popularity}`}
            </p>
          </div>
        </div>

        <div className="movie-desc">
          {/* <h5>This movie</h5> */}
          <div className="movie-desc--sec">
            <div className="movie-desc--image">
              <img
                className="movie-desc--img"
                src={mem?.media?.poster_path ? `${image500}${mem?.media?.poster_path}`: image}
                alt={mem?.person?.name}
              ></img>
            </div>
            <div className="movie-desc--des">
              <h4 className="movie-desc--title">{mem?.media?.title}</h4>
              <p className="movie-desc--charName">{mem?.media?.character}</p>
              <p className="movie-desc--voteAvg">
                <i className="fa-solid fa-star starIcon"></i>{" "}
                {mem?.media?.vote_average ? mem?.media?.vote_average : '-'}
              </p>
              <p className="movie-desc--year">
                {new Date(mem?.media?.release_date).getFullYear().toString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='actor-bioSec'>
        <h3 className="actor-title">Biography</h3>
        <li className="actor-bio" >{actor.biography ? actor.biography : 'Not found'}</li>
      </div>

      <div className="movies-section">
        <h4 className="movies-title">Movies</h4>
        <div className='movies-list'>
          {mem?.person?.known_for.map((e) => {
            const src = `${image500}${e.poster_path}`;
            const src1 = `${images}${e.backdrop_path}`;
            const data = {
              id: e.id,
              name: "movies",
              title: e.title,
              src,
              src1,
              desc: e.overview,
              date: e.release_date,
              genre_ids: e.genre_ids,
              vote_average: e.vote_average,
            };
            return <MovieCard key={data.title} {...data}></MovieCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Member;
