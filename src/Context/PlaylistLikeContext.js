import React,{createContext,useReducer,useContext} from 'react';

const PlaylistContext=createContext();

const Addtofavorite=(state,action)=>{
    switch(action.type){
        case "ADD_TO_LIKE":
            return {...state,addToLikedVideos:[...state.addToLikedVideos,action.payload]}
        case "ADD_TO_PLAYLIST":
            return {...state,addToPlaylist:[...state.addToPlaylist,action.payload]}    
        case "REMOVE_PLAYLIST":
            {
                return {...state,addToLikedVideos:state.addToLikedVideos.filter((video)=>video.v_id !== action.payload)}
            }
        default:
            return {state}
    }
}
const PlaylistLikeContextFunc=({children})=>{
const [state,dispatch] =useReducer(Addtofavorite,{
    addToLikedVideos:[],
    addToPlaylist:[]
})
    return(
        <PlaylistContext.Provider value={{state,dispatch}}>
        {children}
        </PlaylistContext.Provider>
    )
}

export const usePlayLikeContext=()=>{
    return useContext(PlaylistContext)
}

export default PlaylistLikeContextFunc;