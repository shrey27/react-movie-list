import React from 'react';
import Thumbnail from './Thumbnail';

export default function Movies(props){
    const {movies, setShow, setMovie, setFavourite} = props;
    
    return(
        movies && movies.map((movie) => 
            ( <Thumbnail key={movie.id} movie={movie} setShow={setShow} setMovie={setMovie}
              setFavourite={setFavourite}/>))
    );
}