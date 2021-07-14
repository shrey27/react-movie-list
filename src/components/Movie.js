import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w500";

export default function Movie(props){
    const {movie, setPreview, favmovies, setFavMovies} = props;
    const{title,poster_path,overview,vote_average,adult} = movie;

    const updateMovies = () => {
        if(!favmovies.includes(movie))
            {
                setFavMovies([...favmovies,movie]);
                document.getElementById('fav').innerHTML='Added';
            }
    }

    return(
    <div className='movieDetails'>
        <div className='detailSection'>
            <section className='section_1'>
                <img src={poster_path ? IMAGE_API+poster_path :
                        "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1569&q=80"
                } alt={title}/>
            </section>
            <section>
                    <h3>{title}</h3>
                    <p>Overview : {overview}</p>
                    <h4>vote_average: {vote_average}</h4>
                    <h4>Cateory: {adult  ? 'A' : 'U/A'}</h4>
                    <h4><button id='fav' onClick={updateMovies}>Favourite</button></h4>
                    <h4><button onClick={()=>setPreview(true)}>Movie Preview</button></h4>
            </section>
        </div>
    </div>
    );
}