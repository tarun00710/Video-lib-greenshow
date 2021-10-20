import React,{useContext, useEffect} from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import {usePlayLikeContext} from "../Context/PlaylistLikeContext";
import {removeVideoFromPlaylist} from "./Predispatch"
import { SignInContext} from '../Context/SignInContext';
import axios from 'axios';


const PlaylistVideos = () => {

    const {state,dispatch} = usePlayLikeContext()
    const {addToPlaylist} = state
    const {playlistName} = useParams();
    
    console.log(state,"state")
    const {userData} = useContext(SignInContext)

    const playlistInfo=addToPlaylist?.find((item) => item.playlistName === playlistName)

    return (
        !playlistInfo?.playlistVideos ? <div>loading...</div>  : 
        <>
            { playlistInfo?.playlistVideos?.map((video) => {
                const {_id,title,v_id,channel,subscriber,views,postedOn,duration}=video
            return(
                <div className="playlist-video">
                    <div className="playlist-video-content ">
                        <i onClick={ () => removeVideoFromPlaylist(userData, playlistName,_id,dispatch) } class="fa fa-window-close" aria-hidden="true"></i>
                        <ReactPlayer controls width="100%" height="100%" url={`https://www.youtube.com/watch?v=${v_id}`} />
                    </div>
                    <div class="playlist-video-title">
                        {title}
                    </div>
                    <div className="playlist-video_detail">
                        <small>{channel} {subscriber}-subscribers</small>
                        <small>{views} <i class="fa fa-eye" aria-hidden="true"></i></small>
                        <small><i class="fa fa-calendar-o" aria-hidden="true"></i> {postedOn}</small>
                        <small><i class="fa fa-clock-o" aria-hidden="true"></i>{duration}</small> 
                    </div>
                </div>
                )
            })}
        </>
        
    )
}    
export default PlaylistVideos;