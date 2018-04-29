import React, { Component, Fragment } from 'react';
import MovieItemList from './MovieItemList';
import SelectedMovie from './SelectedMovie';

class App extends Component {
  state = {
    movies: [],
    selectedMovie: {},
    trailer: null
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(result => result.json())
      .then(movies => {
        this.setState({ movies, selectedMovie: movies.results[0] });
        this.changeTrailer(this.state.selectedMovie.id)
      })
      .catch(error => console.log(error))
  }

  handleClick = (e, data) => {
    this.setState({ selectedMovie: data });
    this.changeTrailer(data.id);
  }

  changeTrailer = (data) => {
    const trailerURLFetch = `https://api.themoviedb.org/3/movie/${data}/videos?api_key=${process.env.REACT_APP_API_KEY}`;
    fetch(trailerURLFetch)
        .then(result => result.json())
        .then(data => { this.setState({ trailer: data.results[0].key })})
        .catch(error => console.log(error))
  }

  render() {
    return <Fragment>
      <SelectedMovie movie={this.state.selectedMovie} trailer={this.state.trailer}/>
      <MovieItemList movies={this.state.movies.results} onItemClick={this.handleClick}/>
    </Fragment>
  }
}

export default App;
