import React from 'react';
import Thumbnail from './Thumbnail';
import { connect } from 'react-redux';

function Movies({movies, setShow, setMovie, setFavourite}){
    
    return(
        movies ? movies.map((movie) => 
            ( <Thumbnail key={movie.id} movie={movie} setShow={setShow} setMovie={setMovie}
              setFavourite={setFavourite}/>)) : ''
    );
}
const mapStateToProps = (state) => ({
    movies: state.movies,
    })
export default connect(mapStateToProps,null)(Movies)
