import React, { useContext} from 'react';
import { useCategory } from '../Context/CategoryContext';
import {VideoDBContext} from '../Context/VideoContext';
import VideoList from "./VideoList";

const VideoCategory = () => {

    const {VideoDB} = useContext(VideoDBContext)
   
    const {state}= useCategory();

    const filterCategoryFunction=(category) => {
        if(category!=="All"){
            return(
                VideoDB.filter((video)=>{
                    return video.category===category;
                })
            )
        }else{
            return(VideoDB);
        }
       
    }
    const filterCategory=filterCategoryFunction(state.category);
  
    return(
        <>
            <div className="videos">
            {filterCategory?.map((video)=>{
                return (
                    <>
                        <VideoList videodata={video}/>
                    </>
                )
            })}
            </div>
        </>
    )

}
export default VideoCategory;