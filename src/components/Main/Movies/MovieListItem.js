import React from 'react';
import './MovieListItem.css';

const MovieListItem = (props) => {
    return (
        <li className="movie-item">{props.title}</li>
    );
}

export default MovieListItem;