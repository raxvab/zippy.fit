import React, { useState } from 'react'
import "./Navbar.css"
function Navbar() {
  const [linksopen, setlinksopen] = useState(true);
  return (
    <div className='navbar' >
      <div className='menu'>
      <span>
        Logo
      </span>
      <div className="" onClick={()=>setlinksopen(!linksopen)} >
        <img src='menu.svg'>
        </img>
      </div>
      </div>
      <div className={`links ${linksopen?"closed":""}`}>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>

      </div>

      </div>
  )
}

export default Navbar;