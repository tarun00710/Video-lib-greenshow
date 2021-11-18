import React,{useContext} from 'react'
import {Route,Navigate} from 'react-router-dom';
import {SignInContext} from '../Context/SignInContext'

function PrivateRoute({path,...props}) {
    const {token} = useContext(SignInContext);
    return (
        token ? <Route path={path} {...props} /> : <Navigate state={{from: path}} replace to="/signin"/>
    )
} 

export default PrivateRoute
