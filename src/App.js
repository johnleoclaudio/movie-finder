import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = (props) => {
  console.log('API KEY: ', process.env.REACT_APP_TMDB_API_KEY);
  return(
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
