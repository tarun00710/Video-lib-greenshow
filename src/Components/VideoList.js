import React from 'react';
import { Link } from 'react-router-dom';

const VideoList=({videodata})=>{

    const {avatar,title,views,duration,channel,v_id}=videodata;

    const linkStyle = {color:"#506D84"};


    return( 
        <>
        <Link style={linkStyle} className="navlink" to={`/video/${v_id}`}>
          <div className="video-box">
              <img src={avatar} alt="img"/>
              <p>{title}</p>
              <div className="video-detail">
                  <small>{channel}</small>
                  <small>{views} views</small>
                  <small>Length:{duration}</small>
              </div>
            </div>
          </Link>     
        </>
    )

}

export default VideoList;