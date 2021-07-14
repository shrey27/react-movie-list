import React from 'react';
import Thumbnail from './Thumbnail';

export default function FavouriteMovies(props){
    const {favmovies, setShow, setMovie} = props;

    return(
        favmovies.map((movie) => 
        ( <Thumbnail key={movie.id} movie={movie} setShow={setShow} setMovie={setMovie}/>))
    );
}