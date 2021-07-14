import React, {useState,useEffect} from 'react';
import Thumbnail from './components/Thumbnail';
import Movie from './components/Movie';
import Preview from './components/Preview';
import './App.css';

const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63";


function App() {
  const [movies,setMovies] = useState([]);
  const [favmovies,setFavMovies] = useState([]);
  const [show,setShow] = useState(false);
  const [preview,setPreview] = useState(false);
  const [movie,setMovie] = useState({});
  const [favourite,setFavourite] = useState(false);

  useEffect(()=> {
    getMovies(FEATURED_API);
  },[]);
  
  const getMovies = (API) => {
      fetch(API)
          .then(res => res.json())
          .then(data => {
            setMovies(data.results);
            console.log(data.results);
          });
    }
  
  return (
    <div className="App">
      <header>
            {show ? '' : <button onClick={()=>setFavourite(!favourite)} >
              {favourite ?  'Home' : 'Favourite Movies'}</button>}
            {favourite ? '' : <button onClick={()=>setShow(false)}>Go Back</button>}
      </header>
      <div className="movie-container"> 
        {
          show ? <Movie movie={movie} setShow={setShow} favmovies={favmovies} setFavMovies={setFavMovies}
          setPreview={setPreview}/> :
          favourite ? favmovies.map((movie) => 
          ( <Thumbnail key={movie.id} movie={movie} setShow={setShow} setMovie={setMovie}/>))
           : 
          movies && movies.map((movie) => 
          ( <Thumbnail key={movie.id} movie={movie} setShow={setShow} setMovie={setMovie}
            setFavourite={setFavourite}/>))
          }
          {
            preview ? <Preview setPreview={setPreview} /> : ''
          }
      </div>
    </div>
  );
}

export default App;
