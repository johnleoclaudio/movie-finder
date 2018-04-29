import React, { Fragment } from 'react';
import MovieItem from './MovieItem';

const MovieItemList = ({ movies, onItemClick }) => {
    if (movies) {
        const MovieList = movies.map(result => {
            const {id, title, poster_path, overview, backdrop_path} = result;
            const movieInfo = { id, title, poster_path, overview, backdrop_path };
            return <MovieItem onItemClick={onItemClick} key={result.id} movieInfo={movieInfo}/>
        });
        return <Fragment>
            <h2>TO WATCH</h2>
            <ul className="MF-list">
                {MovieList}
            </ul>
        </Fragment>
    } else {
        return <div>Loading...</div>
    }
}
    

export default MovieItemList;