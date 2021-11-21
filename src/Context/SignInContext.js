import React,{createContext,useState,useContext} from 'react';
import axios from 'axios';
import { useLocation , useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const SignInContext = createContext(); 

const SignInContextProv=({children})=>{

const [userData,setUserData] = useState({})
const [token,setToken] = useState()
console.log(token)
const {state} = useLocation();
const navigate = useNavigate();

const login = async(e,email, password,setUserCheck) =>{
    try {
        e.preventDefault()
        const response =await axios.post('https://green-play-library.herokuapp.com/user/login', {email,password})  

        if(response.status === 200){
            setToken(response.data.token)
            setUserData(response.data.decoded.userData)
            localStorage.setItem("userData", JSON.stringify(response.data.decoded.userData));
            localStorage.setItem("email",email)
            localStorage.setItem("token", response.data.token)
        }
        if(response.status === 400 || !userData){
            alert('Invalid login')
        } else {
            setUserCheck({ email: "", password: "" })
            navigate(state?.from ? state.from : '/')
        }    
    }
    catch(err){
      console.log(err)
      toast.error("Authentication failed")  
    }
  
}
    return (
        <SignInContext.Provider value={{token:localStorage.getItem('token'),login, userData,setUserData}}>
            {children}
        </SignInContext.Provider>
    )
}

export const useSignIn = () => {
    useContext(SignInContext)
}


export default SignInContextProv;
