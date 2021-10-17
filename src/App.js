import React,{useState} from 'react';
import "./style.css"
import Nav from './Components/Nav';
import Videoplay from './Components/Videoplay';
import Likedvideos from './Components/LikedVideos';
import Playlists from './Components/Playlists';
import PlaylistVideos from './Components/PlaylistVideos';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import {Routes, Route} from "react-router-dom"
import VideoCategory from './Components/VideoCategory';
import Sidebar from './Components/Sidebar';
import PrivateRoute from './Auth/PrivateRoute';


function App() {
  const [sidebar,setSidebar] = useState(false);
  const handleSidebar = () => setSidebar((sidebar) => !sidebar);
  return (
    <>
    <div className="App">
      <Nav  handleSidebar ={ handleSidebar }/>
      <Sidebar sidebar={sidebar} handleSidebar={handleSidebar}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:category" element={<VideoCategory/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/video/:v_id" element={<Videoplay/>}/>
        <PrivateRoute path="/likedvideos" element={<Likedvideos/>}/>
        <PrivateRoute path="/playlists" element={<Playlists/>}/>
        <Route path="/playlists/:playlistName" element={<PlaylistVideos/>}/>
      </Routes>
    </div>
  </>
    );
}

export default App;
