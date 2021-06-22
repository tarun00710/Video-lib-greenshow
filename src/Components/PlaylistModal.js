import React,{ useState} from 'react';
import Popup from 'reactjs-popup';
import "./playlistModal.css"; 
import {usePlayLikeContext} from '../Context/PlaylistLikeContext'

const PlaylistModal=({videoInfo}) =>{ 
    
    const [playlistValue , setPlaylistValue]=useState()
    const {state,dispatch}=usePlayLikeContext()
    const {addToPlaylist}=state;

    return(
      <Popup
        trigger={<button className="btn btn-success">Add to Playlist</button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">List of Playlists:</div>
              <div className="content">
                {' '}
                {addToPlaylist.map((playlist)=><div className="playlist-name" onClick={()=>dispatch({type:"ADD_TO_EXISTING_PLAYLIST",payload:{playlist,videoInfo}})}>{playlist.playlistName}</div>)}

                  <input className="modal-input" onChange={(e)=>setPlaylistValue(e.target.value)} value={playlistValue} placeholder="Type Here"></input>
                  <button className="btn btn-success" onClick={()=>{
                    dispatch({type:"ADD_PLAYLIST",payload:{playlistValue,videoInfo,setPlaylistValue}})
                    setPlaylistValue("")
                  }}>Create</button>
              
              </div>
            </div>
        )}
      </Popup>
);}
export default PlaylistModal;