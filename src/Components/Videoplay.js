import React,{useContext} from 'react';
import { useParams } from 'react-router';
import {useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {usePlayLikeContext} from "../Context/PlaylistLikeContext";
import PlaylistModal from './PlaylistModal';
import { VideoDBContext } from '../Context/VideoContext';
import { addToLikedVideo } from './Predispatch';
import { SignInContext } from '../Context/SignInContext';

const Videoplay = () => {

    const {v_id} = useParams();
    const videoURL = `https://www.youtube.com/watch?v=${v_id}`;
    const navigate = useNavigate();
    const {VideoDB} = useContext(VideoDBContext);    
    const {dispatch} = usePlayLikeContext();
    const {userData , token} = useContext(SignInContext);
    

    const findVideo =  VideoDB.find((product) => product.v_id === v_id)

    const {title,views,likes,dislikes,duration,description,subscriber,channel,postedOn} = findVideo;
    
    return (
        <div className="videoplayer">
            <div className="video_section">
                <ReactPlayer controls width="100%" height="100%" url={videoURL} />
            </div>
            <div class="video_title">
               {title}
            </div>
            <div className="video_detail">
                <small>{channel} {subscriber}-subscribers</small>
                <small>{views} <i class="fa fa-eye" aria-hidden="true"></i></small>
                <small> <i class="fa fa-calendar-o" aria-hidden="true"></i> {postedOn}</small>
                <small><i class="fa fa-clock-o" aria-hidden="true"></i>{duration}</small>
            </div>
            <div className="video_detail">
                <small><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{likes}</small>
                <small><i class="fa fa-thumbs-o-down" aria-hidden="true"></i>{dislikes}</small>
                <small onClick={() => token ? addToLikedVideo(findVideo,dispatch,userData) : navigate("/signin") }> Add to Liked Video <i class="fa fa-heart-o" aria-hidden="true"></i></small>
                {token ? <PlaylistModal  videoInfo={findVideo}/> : <button onClick={() => navigate("/signin")} className="btn btn-success">Add to playlist</button>}
            </div> 
            <div className="video_description">
                <p>Description:</p>
                    {description}
            </div>
           
            
        </div>    
    )
}
export default Videoplay;