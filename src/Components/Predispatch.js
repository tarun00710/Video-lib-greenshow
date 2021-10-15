import axios from 'axios';

export const RemoveLikedVideoHandler = async(_id,dispatch,userData) => {

    try{
        const response = await axios.delete(`https://green-play-library.herokuapp.com/user/${userData._id}/liked/${_id}`)
        if(response.status === 200 )
            dispatch({ type: "REMOVE_LIKED", payload:_id })
        else
            alert('failed to remove video')    
    }
    catch(err){
        console.log(err.message)
    }
}

export const addToLikedVideo = async(findVideo,dispatch,userData) => {

    try{
        const response = await axios.post(`https://green-play-library.herokuapp.com/user/${userData._id}/liked/${findVideo._id}`)
        if(response.status === 200)
            dispatch({type: 'ADD_TO_LIKE' , payload: findVideo})
        else
            alert('failed to update')
    }
    catch(err){
        console.log(err.message)
    }
} 

export const addPlaylist = async(videoInfo,playlistValue, userData , dispatch) => {
    try{
        console.log(videoInfo._id,"videoInfo")
        const response = await axios.post(`https://green-play-library.herokuapp.com/user/${userData._id}/playlist/${playlistValue}/video/${videoInfo._id}`)
        console.log(response)
        if(response.status === 200)
            dispatch({type:"ADD_PLAYLIST",payload : {playlistValue,videoInfo}})
        else
          alert("Error: " + response.status)
    }
    catch(err){
        console.log(err.message)
    }

}

export const addToExistingPlaylist = async(userData,playlist,videoInfo,dispatch) => {
    try{
        const response = await axios.post(`https://green-play-library.herokuapp.com/user/${userData._id}/playlist/${playlist.playlistName}/video/${videoInfo._id}`)
        console.log(response)
        if(response.status === 200)
            dispatch({type : "ADD_TO_EXISTING_PLAYLIST",payload : {playlist,videoInfo}})
        else
            alert("Error:" + response.status)    
    }catch(err){
        console.log(err.message)
    }
}

export const removePlaylist = async(userData , dispatch , playlistName)  => {
    try{
        const response = await axios.delete(`https://green-play-library.herokuapp.com/user/${userData._id}/playlist/${playlistName}`)
        if(response.status === 200) {
            dispatch({type : "REMOVE_PLAYLIST" , payload : {playlistName}})
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
        console.log("video id",_id)
        const response = await axios.delete(`https://green-play-library.herokuapp.com/user/${userData._id}/playlist/${playlistName}/video/${_id}`)
        console.log(response)
        if(response.status === 200){
            dispatch({type:"REMOVE_FROM_PLAYLIST",payload:{playlistName,_id}})
        }
        else
            alert("Error deleting playlist video")
    }
    catch(err){
        console.log(err.message)
    }
}