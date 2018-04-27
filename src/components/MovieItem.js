import React from 'react';

const MovieItem = ({ movieInfo }) => {
    const imageURL = `https://image.tmdb.org/t/p/w342/${movieInfo.poster_path}`
    return <li className="MF-list-item">
        <img src={imageURL} alt=""/>
    </li>
}

export default MovieItem;