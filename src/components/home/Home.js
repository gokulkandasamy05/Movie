import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { home, apiConfig } from "../api";
import NowPlaying from "./NowPlaying";
import Sections from "./Sections";
import '../css/popular.css';
import '../css/upcoming.css';
import '../css/topRated.css';
import '../css/trending.css';
import '../css/home.css'

export const values = createContext([]);
const { apiKey, image500,images } = apiConfig;
const { popular, upcoming, topRated, latest, nowPlaying, trending } = home;

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const urls = [
      nowPlaying + apiKey,
      latest + apiKey,
      upcoming + apiKey,
      trending + apiKey,
      popular + apiKey,
      topRated + apiKey,
    ];
    Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
      (response) => setData([...response])
    );
  }, []);


  const arr = {
    nowPlaying: data[0],
    latest: data[1],
    upcoming: data[2],
    trending: data[3],
    popular: data[4],
    topRated: data[5],
    image500,
    images
  };

  // const title = [nowPlaying,latest,trending,upcoming,popular,topRated]

  return (
    <div className="home-section">
      <values.Provider value={arr}>
        <NowPlaying ></NowPlaying>
        <Sections name={arr.trending} title='trending' mainTitle='Trending'></Sections>
        <Sections name={arr.popular} title='popular' mainTitle='Popular'></Sections>
        <Sections name={arr.upcoming} title='upcoming' mainTitle='Upcoming'></Sections>
        <Sections name={arr.topRated} title='toprated' mainTitle='Top Rated'></Sections>
      </values.Provider>
    </div>
  );
}

export default Home;
