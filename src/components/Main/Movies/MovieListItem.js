import React from 'react';
import './MovieListItem.css';

const MovieListItem = (props) => {
    return (
        <li className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`} alt=""/>
            <span>{props.movie.title}</span>
        </li>
    );
}

export default MovieListItem;