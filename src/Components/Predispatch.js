import axios from 'axios';
import { toast } from 'react-toastify';

export const RemoveLikedVideoHandler = async(_id,dispatch,userData) => {

    try{
        const response = await axios.delete(`https://green-play-library.herokuapp.com/user/${userData._id}/liked/${_id}`)
        if(response.status === 200 ){
            dispatch({ type: "REMOVE_LIKED", payload:_id })
            toast.success("Successfully removed Video")
        }
        else
            toast.error('failed to remove video')    
    }
    catch(err){
        console.log(err.message)
    }
}

export const addToLikedVideo = async(findVideo,dispatch,userData) => {

    try{
        const response = await axios.post(`https://green-play-library.herokuapp.com/user/${userData._id}/liked/${findVideo._id}`)
        console.log(response)
        if(response.status === 200){
            dispatch({type: 'ADD_TO_LIKE' , payload: findVideo})
            toast.success("Add to liked Video")
        }
        else
            toast.error('failed to update')
    }
    catch(err){
        console.log(err.message)
    }
} 

export const addPlaylist = async(videoInfo,playlistValue, userData , dispatch) => {
    try{
        const response = await axios.post(`https://green-play-library.herokuapp.com/user/${userData._id}/playlist/${playlistValue}/video/${videoInfo._id}`)
        if(response.status === 200){
            dispatch({type:"ADD_PLAYLIST",payload : {playlistValue,videoInfo}})
            toast.success(`Video added to ${playlistValue}`)
        }
        else
          toast.error("Error: " + response.status)
    }
    catch(err){
        console.log(err.message)
    }

}

export const addToExistingPlaylist = async(userData,playlist,videoInfo,dispatch) => {
    try{
        const response = await axios.post(`https://green-play-library.herokuapp.com/user/${userData._id}/playlist/${playlist.playlistName}/video/${videoInfo._id}`)

        if(response.status === 200){
            dispatch({type : "ADD_TO_EXISTING_PLAYLIST",payload : {playlist,videoInfo}})
            toast(`Added to ${playlist.playlistName}`)
        }
        else
            toast.error("Error:" + response.status)    
    }catch(err){
        console.log(err.message)
    }
}

export const removePlaylist = async(userData , dispatch , playlistName)  => {
    try{
        const response = await axios.delete(`https://green-play-library.herokuapp.com/user/${userData._id}/playlist/${playlistName}`)
        if(response.status === 200) {
            dispatch({type : "REMOVE_PLAYLIST" , payload : {playlistName}})
            toast.dark("Removed"+playlistName)
        }
        else
            alert("Error deleting playlist")
    }
    catch(err){
        console.log(err.message)
    }
}



export const removeVideoFromPlaylist = async( userData, playlistName,_id,dispatch) => {
    try{
  
        const response = await axios.delete(`https://green-play-library.herokuapp.com/user/${userData._id}/playlist/${playlistName}/video/${_id}`)
        if(response.status === 200){
            dispatch({type:"REMOVE_FROM_PLAYLIST",payload:{playlistName,_id}})
            toast.success("Removed the video from "+playlistName)
        }
        else
            toast.error("Error deleting playlist video")
    }
    catch(err){
        console.log(err.message)
    }
}