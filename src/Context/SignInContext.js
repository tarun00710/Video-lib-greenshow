import React,{createContext,useState,useContext} from 'react';
import axios from 'axios';
import { useLocation , useNavigate } from 'react-router-dom';

export const SignInContext = createContext(); 

const SignInContextProv=({children})=>{

const [loggedIn,setLoggedIn] = useState(false)
const [userData,setUserData] = useState({})
const {state} = useLocation();
const navigate = useNavigate();



const login = async(e,email, password,setUserCheck) =>{
    try {
        e.preventDefault();
       
        const response =await axios.post('https://green-play-library.herokuapp.com/user/login',{email,password})  
      
        if(response.status === 200){
            setUserData(response.data.users)
            localStorage.setItem("userData", JSON.stringify(response.data.users));
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            localStorage.setItem("token" , response.data.users._id)
        }
        if(response.status === 422 || !userData){
            alert('Invalid login')
        } else {
            setLoggedIn(true);
            setUserCheck({ email: "", password: "" })
            navigate(state?.from ? state.from : "/")
        }    
    }
    catch(error){
        console.log(error)
    }
  
}


    return (
        <SignInContext.Provider value={{loggedIn:localStorage.getItem('token') , login , userData,setUserData,setLoggedIn}}>
            {children}
        </SignInContext.Provider>
    )
}

export const useSignIn = () => {
    useContext(SignInContext)
}


export default SignInContextProv;
