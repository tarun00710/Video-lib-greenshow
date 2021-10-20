import React,{useState , useEffect} from 'react';
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
import { usePlayLikeContext } from './Context/PlaylistLikeContext';
import axios from 'axios';


function App() {

  const [sidebar,setSidebar] = useState(false);
  const handleSidebar = () => setSidebar((sidebar) => !sidebar);

  const {state,dispatch } =  usePlayLikeContext()

  useEffect(() => 
  {  

    const FetchedData= async() => {

    const response =await axios.post('https://green-play-library.herokuapp.com/user/login',{email:localStorage.getItem('email'),password:localStorage.getItem('password')})
    dispatch({ type: "USER_DEFAULT_DATA" , payload: response.data.users});
    }
    if(localStorage.getItem('email')){
      FetchedData()
    } 
  },[]);

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
