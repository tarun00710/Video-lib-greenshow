import React, { useEffect, useState } from 'react';
import { useCategory } from './CategoryContext';
import VideoList from "./VideoList";
// import axios from 'axios';

const VideoCategory=()=>{
    const [VideoDB,setVideoDB]=useState([]);
    useEffect(() => {
        const getdatalist = async () => {
          const res = await fetch("http://localhost:5000/category", {
            method: "GET",
            headers: {
              "Content-type": "application/json"
            }
          });
          const datalist = await res.json();
          setVideoDB(datalist.Videos)
          console.log(datalist)
        };
        getdatalist();
      }, []);
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
    console.log(filterCategory);
    console.log(VideoDB);
    return(
        <>
            <div className="videos">
            {filterCategory?.map((video)=>{
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