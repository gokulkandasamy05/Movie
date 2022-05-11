import React, {useState} from "react";
import "../css/filter.css";



const data = {
  year: ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015",'2014','2013','2012','2011','2010','2009','2008','2007','2006'],
  language: [
    { name: "ta", fullName: "Tamil" },
    { name: "ml", fullName: "Malayalam" },
    {name:'te', fullName: 'Telugu'},
    {name:'kn', fullName: 'Kannada'},
    {name:'hi',fullName: 'Hindi'},
    { name: "en", fullName: "English" }
  ],
};


function Filter(props){
    
     const [arrow,setArrow] = useState(true)

    const arrowupHandler = () => {
      setArrow(false)
    }


    const arrowdownHandler = () => {
      setArrow(true)
    }
  


  return (
    <div className="filter-section">
      <button onMouseEnter={arrowupHandler} className="filter-section--btn" >Filter {arrow ? <i className="fa-solid fa-angle-up" onClick={arrowupHandler}></i> :<i className="fa-solid fa-angle-down" onClick={arrowdownHandler}></i>}</button>
      <div style={{display : arrow ? 'none': 'block',}} className="filter-section--sections" onMouseLeave={arrowdownHandler}>
        <div className="filter-year">
          <label className="filter-year--label" htmlFor="year">
            Year
          </label>
          <select
            className="filter-year--select"
            id="year"
            onChange={props.func}
          >
            {data.year.map((e,i) => {
              return <option key={i} value={e}>{e}</option>;
            })}
          </select>
        </div>

        <div className="filter-language">
          <label className="filter-language--label" htmlFor="language">
            Language
          </label>
          <select
            className="filter-language--select"
            id="language"
            onChange={props.func}
          >
            {data.language.map((e,i) => {
              return <option key={i} value={e.name}>{e.fullName}</option>;
            })}
          </select>
        </div>

        <div className="filter-genre">
          <label className="filter-genre--label" htmlFor="genre">
            Genre
          </label>
          <select
            id="genre"
            className="filter-genre--select"
            onChange={props.func}
          >
            {props.genre.map((e, i) => {
              return (
                <option key={i} value={e.id.toString()}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
