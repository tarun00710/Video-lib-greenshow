import React, { useContext} from 'react';
import { useCategory } from '../Context/CategoryContext';
import {VideoDBContext} from '../Context/VideoContext';
import VideoList from "./VideoList";

const VideoCategory = () => {

    // const [VideoDB,setVideoDB]=useState([]);

    // useEffect(() => {
    //     const getdatalist = async () => {
    //       const res = await axios.get("https://green-play-library.herokuapp.com/category")
    //       console.log(res)
    //       const datalist = await res.data;
    //       setVideoDB(datalist.Videos)
    //       console.log(datalist)
    //     };
    //     getdatalist();
    //   }, []);
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