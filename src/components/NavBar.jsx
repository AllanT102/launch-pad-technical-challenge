import React from "react";
import '../styles/NavBar.css'
import { useState, useEffect } from "react";


function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const bound = 750;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })
  }, [])
  console.log(window.innerWidth)

  return (
    width > bound ?  
    <div className="navbar">
      <span className="logo">DRUBER</span>
      <div className="links">
        <div className="link">Services</div>
        <div className="link">About</div>
        <div className="link">Contact</div>
      </div>
    </div>
    : 
    <div className="navbar">
      <div className="logo">
        DRUBER
      </div>
      <div className="menu">
        Menu
      </div>
    </div>
  )
}

export default NavBar;
