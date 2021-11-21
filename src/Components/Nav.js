 import React, { useContext } from 'react';
import {NavLink} from "react-router-dom";
import { SignInContext } from '../Context/SignInContext';
import icon from '../Assets/icon.jpg'
const Nav=({handleSidebar})=>{

    const {token,logoutHandler} = useContext(SignInContext);
    const linkStyle = { color: "white", textDecoration: "none" };
    const activeStyle = { color: "#33AB55" };
    return (
        <>
            <div className="Nav-section">
                <div className="nav">
                <NavLink className="nav-heading" activeStyle={activeStyle} to="/" style={linkStyle}><label>Green play</label><img src={icon} alt="img"></img>
                </NavLink>
                <div class="search-btn">    
                    <input class="nav-input" placeholder="Search" type="text"/>
                    <i  class="fa fa-search" aria-hidden="true"></i>
                </div>   
                <ul class="nav-list">
                    <li>{token ? <p onClick={()=>logoutHandler()}>Logout<i class="fa fa-sign-out" aria-hidden="true"></i></p> : <NavLink to="/signup" style={linkStyle} activeStyle={activeStyle}>SignUp/LogIn<i class="fa fa-heart" aria-hidden="true"></i></NavLink>}</li>               
                    <li><NavLink to="/likedVideos" style={linkStyle} activeStyle={activeStyle}>Liked Videos<i class="fa fa-heart" aria-hidden="true"></i></NavLink></li>
                    <li><NavLink to="/playlists" style={linkStyle} activeStyle={activeStyle}>Playlists<i class="fa fa-step-forward" aria-hidden="true"></i></NavLink></li>
                </ul>
                <i onClick={handleSidebar}  class="fa fa-bars" aria-hidden="true"></i>         
                </div>
            </div>
        </>        
    )
}

export default Nav;