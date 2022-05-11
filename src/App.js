import "../src/components/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Movies from "./components/trending/Movies";
import Nav from "./components/nav/Nav";
import BookTicket from "./components/book/BookTicket";
import Movie from "../src/components/movie/Movie";
import Favourite from '../src/components/favourite/Favourite';
import Cast from '../src/components/cast/Cast';
import Member from '../src/components/members/Member';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route
            className="home"
            path="/"
            element={<Home></Home>}
          ></Route>
          {/* <Route path="/movies" element={<Movies></Movies>}></Route> */}
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/movies/:movie" element={<Movie></Movie>} ></Route>
          {/* <Route path="/bookticket" element={<BookTicket></BookTicket>}></Route> */}
          <Route path='/favourite' element={<Favourite></Favourite>}></Route>
          <Route path='/favourite/:movie' element={<Movie></Movie>}></Route>
          <Route path='/CastandCrew/:movie' element={<Cast></Cast>}></Route>
          <Route path='/CastandCrew/:movie/:name' element={<Member></Member>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
