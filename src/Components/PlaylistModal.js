import React,{ useState , useContext} from 'react';
import Popup from 'reactjs-popup';
import "./playlistModal.css"; 
import {usePlayLikeContext} from '../Context/PlaylistLikeContext'
import {addPlaylist} from './Predispatch';
import {SignInContext} from '../Context/SignInContext';
import {addToExistingPlaylist} from './Predispatch'

const PlaylistModal=({videoInfo}) =>{ 
    
    const [playlistValue , setPlaylistValue] = useState()
    const {state,dispatch}=usePlayLikeContext()
    const {addToPlaylist}=state;
    const {userData} = useContext(SignInContext)

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
            <div className="header"> List of Playlists: </div>
              <div className="content">
               
                {
                  addToPlaylist?.map((playlist) =>
                  
                  playlist.playlistName !== null ?  

                  <div className="playlist-name" onClick={() => addToExistingPlaylist(userData,playlist,videoInfo,dispatch)}>{playlist.playlistName}
                  </div> : null)
                }
                  
                  <input className="modal-input" onChange={(e)=>setPlaylistValue(e.target.value)} value={playlistValue} placeholder="Type Here"></input>
                  
                  <button className="btn btn-success" onClick={()=> {
                    addPlaylist(videoInfo,playlistValue,userData,dispatch);
                    setPlaylistValue("")}
                  }>Create</button>
              
              </div>
            </div>
        )}
      </Popup>
);}
export default PlaylistModal;