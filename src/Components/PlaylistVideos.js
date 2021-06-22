import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import {usePlayLikeContext} from "../Context/PlaylistLikeContext";

const PlaylistVideos=()=>{

    const {state}=usePlayLikeContext()
    const {addToPlaylist}=state
    const {playlistName}=useParams();

    const playlistInfo=addToPlaylist.find((item)=>item.playlistName===playlistName)
    console.log(playlistInfo)
    const {playlistVideos}=playlistInfo
    
    return (
        <>
            { playlistVideos.map((video) => {
                const {title,v_id,channel,subscriber,views,postedOn,duration}=video
            return(
                <div className="videoplayer">
                    <div className="video_section">
                        <ReactPlayer controls width="100%" height="100%" url={`https://www.youtube.com/watch?v=${v_id}`} />
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
            </div>)
            })}
        </>
        
    )
}    
export default PlaylistVideos;