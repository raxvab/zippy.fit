import React, { useState } from 'react'
import "./Navbar.css"
function Navbar() {
  const [linksopen, setlinksopen] = useState(true);
  return (
    <div className='navbar' >
      <div className='menu'>
      <img src='logo.svg' className='zippylogo'></img>
      <div className="bread" onClick={()=>setlinksopen(!linksopen)} >
        <img height={30} src='menu.svg'>
        </img>
      </div>
      </div>
      <div className={`links ${linksopen?"closed":""}`}>
        <a  onClick={(e)=>{setlinksopen(!linksopen)
      //  e.preventDefault();
       document
    .querySelector("#howitworks")
    .scrollIntoView({ behavior: "smooth" });
        
        }}>How it works</a>
        <a  onClick={()=>{setlinksopen(!linksopen)
        document.querySelector("#about")
        .scrollIntoView({ behavior: "smooth" });
        
        }}>About Us</a>
        <a href='#' onClick={()=>setlinksopen(!linksopen)}>Contact Us</a>
        <a href='#' onClick={()=>setlinksopen(!linksopen)}>WhiteList Me</a>
        
        <a href='#' onClick={()=>setlinksopen(!linksopen)}>FAQs</a>
        <a href='# ' onClick={()=>setlinksopen(!linksopen)}>WhitePaper</a>

      </div>

      </div>
  )
}

export default Navbar;