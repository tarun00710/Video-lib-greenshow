import React,{useContext,createContext,useReducer} from 'react';

const CategoryContext=createContext();

const categoryReducer=(state,action)=>{
    
    switch(action.type){
        case "BASICS":
            return {...state,category:"Gardening Basics"}
        case "TIPS":
            return {...state,category:"Tips for Effective Gardening"}
        case "GROW":
            return {...state,category:"Growing Fruits"} 
        case "DIY":
            return {...state,category:"DIY"}        
        default:
            return {...state,category:"All"}                   
    }

}
export default function CategoryFunction({children}){
    const [state,dispatch]=useReducer(categoryReducer,{category:""});
return(
    <CategoryContext.Provider value={{state,dispatch}}>
        {children}
    </CategoryContext.Provider>
)
    
}
export const useCategory=()=>{
    return useContext(CategoryContext);
}