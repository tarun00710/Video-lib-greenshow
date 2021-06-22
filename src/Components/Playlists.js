import React from 'react';
import {usePlayLikeContext} from '../Context/PlaylistLikeContext';
import { Link } from 'react-router-dom';

const Playlists =()=>{

const {state}=usePlayLikeContext();
const {addToPlaylist}=state;

    return (
                          
            <div class="playlist-section">
                <h3 className="playlist-title">Your Playlists:</h3> 
                {addToPlaylist?.map((item)=>
                    <Link style={{textDecoration: 'none',color: 'black'}} to={`/playlists/${item.playlistName}`}>

                        <div  class="playlist-item">
                            <h4>{item.playlistName}</h4>
                            <i  class="fa fa-play" aria-hidden="true"></i>       
                        </div>

                    </Link> 
                )}    
                       
            </div>    
       
        )
}
export default Playlists;