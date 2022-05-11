import React, { useContext, useState, useEffect } from "react";
import { values } from "./Home";
import "../css/nowPlaying.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay, Pagination } from "swiper";

// import MovieCard from "./MovieCard";

const NowPlaying = () => {
  const [data, setData] = useState("");
  const arr = useContext(values);

  useEffect(() => {
    if (arr.nowPlaying === undefined) {
      return;
    } else {
      setData(arr.nowPlaying.results.splice(0, 9));
    }
  }, [arr.nowPlaying]);


  return (
    <section className="nowPlaying">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="nowPlaying-movieSec"
      >
        {data?.length &&
          data.map((e, i) => {
            
            let datas = {
              title: e.title,
              poster: arr.image500+e.poster_path,
              backdrop: arr.image500+e.backdrop_path,
              date:e.release_date,
              desc:e.overview,
              id:e.id,
              favBtn:false,
              genre_ids:e.genre_ids
            };

            return (
              <SwiperSlide className="nowPlaying-movie">
                <img
                  className="nowPlaying-movie--image"
                  src={arr.image500 + e.backdrop_path}
                  alt={e.title}
                ></img>

                <div className="nowPlaying-movie--desc">
                  <h2 className="nowPlaying-movie--title">{e.title}</h2>
                  <p className="nowPlaying-movie--overview">{e.overview}</p>
                  <Link to={`movies/${e.title}`} state={{...datas}}>
                    <button className="nowPlaying-movie--btn">Watch Trailer</button>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default NowPlaying;
