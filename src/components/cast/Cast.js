import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiConfig, credit } from "../api";
import "../css/castandcrew.css";
import ProfileCard from "./ProfileCard";
import "../css/profilecard.css";
import {Link} from 'react-router-dom';

const Cast = () => {
  const [creditData, setCreditData] = useState([]);
  const [crewData, setCrewData] = useState([]);
  const location = useLocation();
  const {id,title} = location.state;

  const { apiKey, getCredit } = { ...apiConfig, ...credit };



  useEffect(() => {
    fetch(getCredit(id, apiKey))
      .then((response) => response.json())
      .then((data) => {
        setCreditData(data.cast);
        setCrewData(data.crew)
      });
  }, [apiKey, getCredit,id]);

  // console.log(creditData.length,crewData.length);

  return (
    <>
      <section className="castandcrew-section">
        <h1 className="castName">Cast  <span className="creditCount">( {creditData.length} )</span></h1>
        <div className="profileCards">
          {creditData.map((e) => {
            const data = {
              id: e.id,
              character: e.character,
              credit_id: e.credit_id,
              name: e.name,
              profile_path: e.profile_path,
              apiKey
            };
            return <Link to={`/CastandCrew/${title}/${data.name}`} className='profileLink' state={{...data}}><ProfileCard {...data}></ProfileCard></Link>;
          })}
        </div>
        <h1 className='crewName'>Crew  <span className='crewCount'>( { crewData.length} )</span></h1>
        <div className="profileCards">
          {crewData.map((e) => {
            const dataCrew = {
              id: e.id,
              character: e.character,
              credit_id: e.credit_id,
              name: e.name,
              profile_path: e.profile_path,
              job: e.job,
              apiKey
            };
            return <Link to={`/CastandCrew/${title}/${dataCrew.name}`} className='profileLink' state={{...dataCrew}}><ProfileCard {...dataCrew}></ProfileCard></Link>;
          })}
        </div>
      </section>
    </>
  );
};

export default Cast;
