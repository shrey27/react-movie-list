import {React} from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w500";
    
function Thumbnail(props){
    const {movie, setShow, setMovie, setFavourite} = props;
    const {title,poster_path} = movie;

    return(
            <div className="movie">
                
                <img src={
                    poster_path ? IMAGE_API+poster_path :
                    "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1569&q=80"
                } onClick={()=>{
                    setShow(true);
                    setMovie(movie);
                    setFavourite(false);
                }} alt={title}/>
                <div className="movie-info">
                    <h4>{title}</h4>
                </div>
            </div> );
};

export default Thumbnail;