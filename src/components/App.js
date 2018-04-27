import React, { Component, Fragment } from 'react';
import MovieItemList from './MovieItemList';

class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(result => result.json())
      .then(movies => this.setState({ movies }))
      .catch(error => console.log(error))
  }

  render() {
    return <Fragment>
      <MovieItemList movies={this.state.movies.results}/>
    </Fragment>
  }
}

export default App;
