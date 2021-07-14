import React from 'react';
import Thumbnail from './Thumbnail';

function Movies({movies, setShow, setMovie, setFavourite}){
    
    return(
        movies ? movies.map((movie) => 
            ( <Thumbnail key={movie.id} movie={movie} setShow={setShow} setMovie={setMovie}
              setFavourite={setFavourite}/>)) : ''
    );
}

export default Movies;
