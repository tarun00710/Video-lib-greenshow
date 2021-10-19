import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import CategoryFunction from './Context/CategoryContext';
import PlaylistLikeContextFunc from './Context/PlaylistLikeContext';
import SignInContextProv from './Context/SignInContext';
import VideoContext from './Context/VideoContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <SignInContextProv>
      <VideoContext>
            <CategoryFunction>
              <PlaylistLikeContextFunc>
                <App />
              </PlaylistLikeContextFunc>
            </CategoryFunction> 
      </VideoContext>
    </SignInContextProv>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

