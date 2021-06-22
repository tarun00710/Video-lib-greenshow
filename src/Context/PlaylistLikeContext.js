import React,{createContext,useReducer,useContext} from 'react';

const PlaylistContext=createContext();

const Addtofavorite=(state,action)=>{

    switch(action.type){
        case "ADD_TO_LIKE":
             return {...state,addToLikedVideos:[...state.addToLikedVideos,action.payload]}

        case "ADD_PLAYLIST":{

            const {playlistValue,videoInfo}=action.payload
            return {...state,addToPlaylist:[...state.addToPlaylist,{playlistName:playlistValue,playlistVideos:[videoInfo]}]}
        }  
        case "REMOVE_PLAYLIST": 
            return {...state,addToLikedVideos:state.addToLikedVideos.filter((video)=>video.v_id !== action.payload)}
        case "ADD_TO_EXISTING_PLAYLIST":
            {
                console.log("i was dispatched",action.payload)
            const {playlist,videoInfo}=action.payload

            return {...state,addToPlaylist:state.addToPlaylist.map((ele) => { 

                if (ele.playlistName === playlist.playlistName){
                    console.log("i was matched",ele)
                   return {
                      ...ele,
                      playlistVideos:ele.playlistVideos.concat(videoInfo)
                    };
                  }
                  return {...ele}
                })
            }
        }
        default:
            return {state}
    }
}

// {...state,addToPlaylist:[...state.addToPlaylist,...state.addToPlaylist.find((playlist)=>playlist.playlistName===playlistValue).playlistVideos.concat(videoInfo)]}


const PlaylistLikeContextFunc=({children})=>{
const [state,dispatch] =useReducer(Addtofavorite,{
    addToLikedVideos:[],
    addToPlaylist:[{playlistName:null,playlistVideos:[]}]
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