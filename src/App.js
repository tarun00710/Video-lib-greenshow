import React,{useState} from 'react';
import "./style.css";
import Nav from './Components/Nav';
import Videoplay from './Components/Videoplay';
import Likedvideos from './Components/LikedVideos';
import Playlists from './Components/Playlists';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import {Routes, Route} from "react-router-dom"
import Category from './Components/VideoCategory';
import Sidebar from './Components/Sidebar';
function App() {
  const [sidebar,setSidebar] =useState(false);
  const handleSidebar = () => setSidebar((sidebar) => !sidebar);
  console.log(sidebar);
  return (
    <>
    <div className="App">
    <Nav  handleSidebar ={ handleSidebar }/>
    <Sidebar sidebar={sidebar} handleSidebar={handleSidebar}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/video/:v_id" element={<Videoplay/>}/>
      <Route path="/likedvideos" element={<Likedvideos/>}/>
      <Route path="/Playlists" element={<Playlists/>}/>
    </Routes>
    </div>
  </>
    );
}

export default App;
