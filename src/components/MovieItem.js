import React from 'react';

const MovieItem = ({ movieInfo, onItemClick }) => {
    if (movieInfo) {
        const imageURL = `https://image.tmdb.org/t/p/w342/${movieInfo.poster_path}`
        return <li className="MF-list-item" onClick={(e) => onItemClick(e, movieInfo)}>
            <img src={imageURL} alt=""/>
        </li>
    } else {
        return null
    }
}

export default MovieItem;