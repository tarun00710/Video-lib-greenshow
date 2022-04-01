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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function App() {

  const [sidebar,setSidebar] = useState(false);
  const handleSidebar = () => setSidebar((sidebar) => !sidebar);

  const {dispatch } =  usePlayLikeContext()

  useEffect(() => 
  {   
    const FetchedData= async() => {
    const response =await axios.get('https://green-play-library.herokuapp.com/user/userInfo',{ headers: {authorization:localStorage.getItem('token')}
  }
  )

    dispatch({ type: "USER_DEFAULT_DATA" , payload: response.data.getUser});
    }
    if(localStorage.getItem('token')){
      FetchedData()
    } 
  },[dispatch]);

  return (
    <>
    <div className="App">
      <Nav  handleSidebar ={ handleSidebar }/>
      <ToastContainer />
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
