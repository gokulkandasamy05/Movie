import React, { useContext, useState,useEffect} from "react";
import "../css/trending.css";
import { values } from "./Home";
import MovieCard from "../trending/MovieCard";
// import Hoc from '../HomeLayout'


const Sections = ({name,title,mainTitle}) => {
  const [data, setData] = useState('');
  const arr = useContext(values);

  useEffect(() => {
    if (name === undefined) {
      return;
    } else {
      setData(name.results);
    }
  }, [name]);



  return (
    <div className={`${title}-section`}>
      <h3 className={`${title}-section--name`}>{mainTitle}</h3>
      <div className={`${title}-movies`}>
      {data?.length && data.map((e) =>{
        const datas = {
            name:'movies',
              title: e.title,
              id: e.id,
              src: arr.images+e.poster_path,
              desc: e.overview,
              src1: arr.images+e.backdrop_path,
              date: e.release_date,
              favBtn: false,
              genre_ids:e.genre_ids,
              vote_average:e.vote_average
            };
          return <MovieCard key={e.title} {...datas}></MovieCard>
      })}
      </div>
    </div>
  );
};

// const Trendings = Hoc(Trending,'trending')

export default Sections;
