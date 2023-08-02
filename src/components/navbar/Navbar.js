import React, {useState,useEffect} from 'react';
import "./Navbar.css";
import Data from "../Data.json";

import { FaBars  } from 'react-icons/fa';




const Navbar = () => {

  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  
  
  return (
    <>
 <div className='full_header'>
 <nav style={{width: '100%', backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"}}>
    <div className='container'>
    <div className='log' id="logo"> <img src={require('../images/logo.png')} className='logo'/>  O'zMU ilmiy ishlar bo'limi <label for="drop" class="toggle"><FaBars /></label></div>

   
    <input type="checkbox" id="drop" />
        <ul class="menu">

          {Data.map(post => {
            return (
           
              <li  key={post.id}>      
                
              <a href={post.path} >{post.title} </a>
              <input type="checkbox" id="drop-1"/>
              <ul>
                 {post.subnav && post.subnav.map(data => (
                   <li key={data.id}><a href={data.path}>{data.name}</a></li>
                 ))}
                 
              </ul> 

          </li>
       
            )
          })}
                      
        </ul>
     
        </div>
       
    </nav>
   
 </div>

    </>

  )
}

export default Navbar;

