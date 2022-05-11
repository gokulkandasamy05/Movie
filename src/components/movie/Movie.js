import React, { useEffect, useState } from "react";
import "../css/movie.css";
import { useLocation } from "react-router";
import { apiConfig } from "../api";
import MovieTrailer from "./MovieTrailer";
import FavouriteBtn from "./FavouriteBtn";
import {Link} from 'react-router-dom';
import '../css/cast.css';



const { videos, yVideos, apiKey,geners } = apiConfig;


const Movie = () => {
  const [video, setVideo] = useState(true);
  const [keys,setKeys] = useState('')
  const [fav,setFav] = useState(false)
  const [genre, setGenre] = useState([])
  const location = useLocation();
  const { title, poster, backdrop, date, desc, id,favBtn, genre_ids} = location.state;
  const castData ={title,id}
  
  useEffect(() => {
    fetch(`${videos}${id}/videos?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setKeys( data.results.length === 0 ? 'tgbNymZ7vqY'  : data.results[0].key)
      });
  }, [id]);


  useEffect(() => {
    fetch(geners + apiKey)
     .then(res => res.json()) 
    .then(data => setGenre(data))
  },[])




  const modalHandler = () => {
    setVideo(false);
  };

  const cancelHandler = () => {
    setVideo(true);
  };

  const favouriteHandler = () =>{
    const arr = []
    let item = JSON.parse(localStorage.getItem('data'))
    const items = {
      id :id,
      title: title,
      poster: poster,
      date:date,
      backdrop:backdrop,
      desc:desc,
      genre_ids:genre_ids,
    }
    if(item){
      arr.push(...item,items)
    }else{
      arr.push(items)
    }
    localStorage.setItem('data', JSON.stringify(arr))
    
    items.id = ''
    items.title = ''
    items.poster = ''
    items.date = ''
    items.backdrop = ''
    items.desc = ''


    setFav(true)
    setTimeout(function(){
      setFav(false)
    },5000)
  }

  // console.log(`${yVideos}${keys}`)

  return (
    <div className="movie-section">
      
      <div className="movie-background">
        <img
          className="movie-background--image"
          src={backdrop}
          alt="poster"
        ></img>

      
        <div style={{display: fav ? 'block' : 'none'}} className="favourite-notification">
          <p>Added to favourite</p>
        </div>

        <div className="movie-contents">
          <div className="movie-contents--details">
            <h2 className="movie-title">{title}</h2>
            <p className="movie-desc">{desc}</p>
            <div className="movie-genre">{genre?.genres?.length ? genre.genres.map(e =>{
              return genre_ids?.length && genre_ids.map(id => e.id === id && <li className='genre' key={id}>{`${e.name}`}</li>)
            }): ''}
            </div>
            <p className="movie-date">{`${new Date(date).getFullYear()}`}</p>
            <div className="movie-trailer">
              <MovieTrailer func={modalHandler}></MovieTrailer>
              {!favBtn ? <FavouriteBtn func={favouriteHandler} state={fav}></FavouriteBtn>: ''}
            </div>
          </div>

          <div className="movie-contents--image">
            <img className="movie-poster" src={poster} alt="poster"></img>
          </div>
        </div>
        

        <Link className='cast-section' to={`/CastandCrew/${title}`} state={{...castData}}>Cast and crew</Link>



        <div
          className="trailer-video"
          style={{ display: video ? "none" : "flex" }}
        >
          <iframe
            src={video ? '' : `${yVideos}${keys}`}
            title={keys.name}
            className="trailer-vedio--src"
            width="420"
            height="250"
            frameBorder="0" 
            border="0" 
            cellSpacing="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <i
            className="fa-solid fa-square-xmark cancelIcon"
            onClick={cancelHandler}
          ></i>
        </div>



        <div className="similar-section">

        </div>


      </div>
    </div>
  );
};

export default Movie;
