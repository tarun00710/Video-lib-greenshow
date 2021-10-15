import React from 'react';
import {NavLink} from 'react-router-dom';
import {useCategory} from "../Context/CategoryContext";
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import img4 from '../Assets/img4.jpg';
const Home =()=>{
    const {dispatch} = useCategory();
    return (
        <>
        <p>Check out all the videos ...<NavLink className="explore" to='/category/all'><strong  onClick={()=>dispatch({type:"OTHER"})}>Explore all</strong></NavLink></p>
        <div className="Home">
        <div class="grid-2">
        <img class="image-grid" src={img1} alt="img" />
            <div class="flex-in-grid">
                <p>Learn Gardening Basics</p>
                <h4>Watch and Learn step by steps...</h4>
                <NavLink to="/category/basic"><button onClick={()=>dispatch({type:"BASICS"})} type="button" class="btn btn-success">Show me</button></NavLink> 
            </div>
        </div>
        <div class="grid-3">
        
            <div class="flex-in-grid">
                <p>Tips for Effective Gardening</p>
                <h4>Learn how to do effective gardening for good result.</h4>
                <NavLink to="/category/tips"><button onClick={()=>dispatch({type:"TIPS"})} type="button" class="btn btn-success">Show me</button></NavLink>
            </div>
            <img class="image-grid" src={img2} alt="img" />
        </div>
        <div class="grid-2">
        <img class="image-grid" src={img3}  alt="img" />
            <div class="flex-in-grid">
                <p>Grow Fruits at Home.</p>
                <h4>Want to Grow fruits ? Checkout videos...</h4>
                <NavLink to="/category/grow"><button onClick={()=>dispatch({type:"GROW"})} type="button" class="btn btn-success">Show me</button></NavLink>
            </div>
        </div>
        <div class="grid-3">
        
            <div class="flex-in-grid">
                <p>DIY for decoration using indoor plants.</p>
                <h4>Make you home more living and green. All you need is little effort and plants ofcourse.</h4>
                <NavLink to="/category/diy"><button onClick={()=>dispatch({type:"DIY"})} type="button" class="btn btn-success">Show me</button></NavLink>
            </div>
            <img class="image-grid" src={img4} alt="img" />
        </div>
        </div>
        </>
    )
}
export default Home;


  