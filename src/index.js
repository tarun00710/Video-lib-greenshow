import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import CategoryFunction from './Components/CategoryContext';
import PlaylistLikeContextFunc from './Context/PlaylistLikeContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <CategoryFunction>
    <PlaylistLikeContextFunc>
      <App />
    </PlaylistLikeContextFunc>
    </CategoryFunction> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

