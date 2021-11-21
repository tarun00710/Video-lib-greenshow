import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { SignInContext } from '../Context/SignInContext';
const Sidebar = ({ sidebar, handleSidebar }) => {

const { token,logoutHandler} = useContext(SignInContext);


  return (
    <>
      <nav
        onClick={handleSidebar}
        className={sidebar ? "sidebaractive" : "sidebar"}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
        <ul className="nav-list sidebarMenu">
          <li className="nav-menu-items">
            {token ? <p onClick={()=> logoutHandler()} className="navstyle">Logout</p> : <NavLink className="navstyle" to="/signup" >
            SignUp/LogIn<i class="fa fa-user" aria-hidden="true"></i>
          </NavLink> }
            <hr />
          </li>

          <li className="nav-menu-items">
          <NavLink className="navstyle" to="/likedVideos"  >
            Liked Videos<i class="fa fa-heart" aria-hidden="true"></i>
          </NavLink>
            <hr />
          </li>

          <li className="nav-menu-items">
          <NavLink className="navstyle" to="/playlists" >
            Playlists
             <i class="fa fa-step-forward" aria-hidden="true"></i>
          </NavLink>
            <hr />
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Sidebar;
