import React from 'react';
import MovieItem from './MovieItem';

const MovieItemList = ({ movies }) => {
    if (movies) {
        const MovieList = movies.map(result => {
            const {id, title, poster_path, overview} = result;
            const movieInfo = { id, title, poster_path, overview };
            return <MovieItem key={result.id} movieInfo={movieInfo}/>
        });
        return <ul className="MF-list">
            {MovieList}
        </ul>
    } else {
        return <div>Loading...</div>
    }
}
    

export default MovieItemList;