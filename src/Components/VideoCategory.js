import React from 'react';
import { useCategory } from './CategoryContext';
import {VideoDB} from "./VideoDB";
import VideoList from "./VideoList";
const filterCategoryFunction=(category) => {
    console.log(category);
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

const VideoCategory=()=>{
    const {state}= useCategory();
    const filterCategory=filterCategoryFunction(state.category);
    console.log(filterCategory);
    return(
        <>
            <div className="videos">
            {filterCategory.map((video)=>{
                console.log(video)
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