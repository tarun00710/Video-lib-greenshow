import React , { createContext, useEffect , useState} from 'react'
import axios from 'axios';

export const VideoDBContext = createContext();

const VideoContext = ({children}) => {

const [VideoDB , setVideoDB] = useState([])

useEffect(() =>{
    
    const getData = async() => {
        const response = await axios.get('https://green-play-library.herokuapp.com/category')
        const videoData = await response.data;
        setVideoDB(videoData.Videos)
    }
    getData()
},[])


    return (
        <VideoDBContext.Provider value={{VideoDB}}>
            {children}
        </VideoDBContext.Provider>
    )
}

export default VideoContext
