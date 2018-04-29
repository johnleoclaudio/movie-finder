import React from 'react';

export default ({ movie, trailer }) => {
    const imgURL = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
    const trailerURL = `https://www.youtube.com/embed/${trailer}?rel=0`;
    return <div className="MF-selected-movie">
        <div className="MF-movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
        <div className="MF-movie-trailer">
            <iframe width="560" height="315" src={trailerURL} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen" title={trailer}></iframe>
        </div>
        <div className="MF-poster-overlay"></div>
        <img className="MF-poster" src={imgURL} alt=""/>
    </div>
}