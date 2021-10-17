import React,{useContext} from 'react';
import {usePlayLikeContext} from '../Context/PlaylistLikeContext';
import { Link } from 'react-router-dom';
import {removePlaylist} from './Predispatch';
import { SignInContext } from '../Context/SignInContext';



const Playlists = () => {

const {userData} = useContext(SignInContext)
const {state , dispatch} = usePlayLikeContext();
const {addToPlaylist}=state;

console.log(addToPlaylist)
    return (
                          
            <div class="playlist-section">
                <h3 className="playlist-title">Your Playlists:</h3> 
                {addToPlaylist?.map((item)=>
                    item.playlistName !== null ?
                    <div className="playlist-item">
                        <Link style={{textDecoration: 'none', color:'#334756'}} to={`/playlists/${item.playlistName}`}>
                            <div className="playlist-content">
                                <h3>{item.playlistName}</h3>
                                <i  class="fa fa-play" aria-hidden="true"></i>
                            </div>    
                        </Link>
                        <i onClick={() => removePlaylist(userData , dispatch,item.playlistName)} class="fa fa-trash-o" aria-hidden="true"></i>
                    </div> : null
                    
                )}    
                       
            </div>    
       
        )
}
export default Playlists;