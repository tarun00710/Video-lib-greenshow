import React, { useContext } from 'react';
import { usePlayLikeContext } from '../Context/PlaylistLikeContext';
import {RemoveLikedVideoHandler} from '../Components/Predispatch'
import {SignInContext } from '../Context/SignInContext';
import PlaylistModal from './PlaylistModal';

const Likedvideos=()=>{

    const {state,dispatch}=usePlayLikeContext();
    const {userData} = useContext(SignInContext)            
    return (

      !state.addToLikedVideos? <div>loading...</div>  : 
      <div>

      <h3 className="playlist-title">Your Favourite Videos:</h3>
      {state?.addToLikedVideos.map((video) => {
          const {avatar,title,views,duration,channel,_id}=video;
          console.log(video)
        return (
          <>
            <div id={_id} class="horizontal-card card-dismiss">
              <div 
                onClick={() => RemoveLikedVideoHandler(_id,dispatch,userData)}
              >
              <i className="fa fa-trash"></i>
              </div>
              <img class="hcard-image" src={avatar} alt="img" />
              <div class="card-info">
                <div class="card-description">
                  <h4 style={{ color: "#868686"}}>{title}</h4>
                  <p> {views} views</p>
                  <p> {duration} mins </p>
                  <p> {channel}</p>
                </div>
                <div class="card-button-option">
            
                    <PlaylistModal videoInfo={video}/>
      
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