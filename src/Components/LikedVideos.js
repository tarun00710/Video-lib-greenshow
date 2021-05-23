import React from 'react';
import { usePlayLikeContext } from '../Context/PlaylistLikeContext';

const Likedvideos=()=>{
    const {state,dispatch}=usePlayLikeContext();
    return (
        <div>
      <p>Your Favourite Videos:</p>
      {state.addToLikedVideos.map((video) => {
          const {avatar,title,views,duration,channel,v_id}=video;
        return (
          <>
            <div id={v_id} class="horizontal-card card-dismiss">
              <div 
                onClick={() =>
                  dispatch({ type: "REMOVE_PLAYLIST", payload: v_id })
                }
              >
                <i style={{color:"red"}} className="fas fa-times dismiss"></i>
              </div>
              <img class="hcard-image" src={avatar} alt="img" />
              <div class="card-info">
                <div class="card-description">
                  <h3>{title}</h3>
                  <p> {views} views</p>
                  <p> {duration} mins </p>
                  <p> {channel}</p>
                </div>
                <div class="card-button-option">
                  <button  onClick={() =>
                    dispatch({ type: "ADD_TO_PLAYLIST", payload: video })
                  } type="button" class="btn btn-outline">
                    Move to Playlist
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
    )
}
export default Likedvideos;