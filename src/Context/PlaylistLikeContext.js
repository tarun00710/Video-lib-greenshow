import React,{createContext,useReducer,useContext, useEffect} from 'react';
import {SignInContext} from '../Context/SignInContext'

const PlaylistContext=createContext();

const Addtofavorite=(state,action)=>{

    switch(action.type){

        case "ADD_TO_LIKE" :
             return {...state,addToLikedVideos:[...state.addToLikedVideos,action.payload]}

        case "ADD_PLAYLIST" : {
            const { playlistValue,videoInfo } = action.payload
            return {...state,addToPlaylist:[...state.addToPlaylist,{ playlistName : playlistValue,playlistVideos:[videoInfo]}]}
        }
        case "REMOVE_LIKED" :
            return {...state,addToLikedVideos:state.addToLikedVideos.filter((video)=>video._id !== action.payload)}

        case "ADD_TO_EXISTING_PLAYLIST":
            { 
            const {playlist,videoInfo}=action.payload

            return {...state,addToPlaylist:state.addToPlaylist.map((ele) => { 

                if (ele.playlistName === playlist.playlistName){
                   return {
                      ...ele,
                      playlistVideos:ele.playlistVideos.concat(videoInfo)
                    };
                  }
                  return {...ele}
                })
            }
        }

        case "REMOVE_FROM_PLAYLIST" : {

          
            const { playlistName , _id } = action.payload;
           
            return {...state,addToPlaylist:state.addToPlaylist.map((ele) => { 

                if (ele.playlistName === playlistName){
                    console.log(ele,"hello")
                   return {
                      ...ele,
                      playlistVideos:ele.playlistVideos.filter((video) => video._id !== _id)
                    };
                  }
                  return {...ele}
                })
            }
        }

        case "REMOVE_PLAYLIST" : {
           
            const { playlistName } = action.payload;
            return {...state , addToPlaylist:[...state.addToPlaylist.filter((ele) => ele.playlistName !== playlistName)]}
        }   

        case "USER_DEFAULT_DATA" : {
            return {...state,addToLikedVideos : action.payload.likedvideos , addToPlaylist: action.payload.playlists }
        }
        default:
            return {state}
    }
}

// {...state,addToPlaylist:[...state.addToPlaylist,...state.addToPlaylist.find((playlist)=>playlist.playlistName===playlistValue).playlistVideos.concat(videoInfo)]}

const PlaylistLikeContextFunc=({children}) => {

    const [state,dispatch] =useReducer(Addtofavorite,{
        addToLikedVideos : [],
        addToPlaylist : [{playlistName : null,playlistVideos : []}]
    })

    const { userData } = useContext(SignInContext)

    useEffect(() => {
        dispatch({ type: "USER_DEFAULT_DATA" , payload: userData });
    },[userData])

    console.log(state.addToLikedVideos,"liked videos")

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