import React from 'react';
import { useParams } from 'react-router';
import {VideoDB} from "./VideoDB";
import ReactPlayer from 'react-player';
import {usePlayLikeContext} from "../Context/PlaylistLikeContext";
import PlaylistModal from './PlaylistModal';

const Videoplay =()=>{
    const {v_id} = useParams();
    const videoURL=`https://www.youtube.com/watch?v=${v_id}`;
    
    const {dispatch}=usePlayLikeContext();
    const findVideo=VideoDB.find((product)=>product.v_id === v_id)
    const {title,views,likes,dislikes,duration,description,subscriber,channel,postedOn}=findVideo;
    return (
        <div className="videoplayer">
            <div className="video_section">
            <ReactPlayer controls width="100%" height="100%" url={videoURL} />
            </div>
            <div class="videotitle">
            {title}
            </div>
            <div className="video_detail">
                <small>{channel} {subscriber}-subscribers</small>
                <small>{views} <i class="fa fa-eye" aria-hidden="true"></i></small>
                <small><i class="fa fa-calendar-o" aria-hidden="true"></i> {postedOn}</small>
                <small><i class="fa fa-clock-o" aria-hidden="true"></i>{duration}</small>
            </div>
            <div className="video_detail">
                <small><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{likes}</small>
                <small><i class="fa fa-thumbs-o-down" aria-hidden="true"></i>{dislikes}</small>
                <small onClick={()=>dispatch({type:"ADD_TO_LIKE",payload:findVideo})}>Add to Liked Video <i class="fa fa-heart-o" aria-hidden="true"></i></small>
                <PlaylistModal  videoInfo={findVideo}/> <i class="fa fa-play-circle" aria-hidden="true"></i>
            </div> 
            <div className="video_description">
                <h4>Description:</h4>
                    {description}
            </div>
            
        </div>    
    )
}
export default Videoplay;