import React from 'react';

const MovieItem = ({ movieInfo }) => {
    const imageURL = `https://image.tmdb.org/t/p/w342/${movieInfo.poster_path}`
    return <li>
        <img src={imageURL} alt=""/>
        <h2>{movieInfo.title}</h2>
        <p>{movieInfo.overview}</p>

    </li>
}

export default MovieItem;