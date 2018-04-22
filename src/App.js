import React from 'react';
import './App.css';

const App = (props) => {
  console.log('API KEY: ', process.env.REACT_APP_TMDB_API_KEY);
  return(
    <div>
      <h1>Smashed Potatoes</h1>
    </div>
  );
}

export default App;
