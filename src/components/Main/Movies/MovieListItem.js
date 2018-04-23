import React from 'react';
import './MovieListItem.css';

const MovieListItem = (props) => {
    return (
        <li className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`} alt=""/>
            <div className="movie-description">
			<h2>{props.movie.title}</h2>
			<section className="movie-details">
				<div className="movie-year">
					<span className="title">Year</span>
					<span>{props.movie.release_date.substring(0, 4)}</span>
				</div>
				<div className="movie-rating">
					<span className="title">Rating</span>
					<span>{props.movie.vote_average}</span>
				</div>
			</section>
		</div>
        </li>
    );
}

export default MovieListItem;