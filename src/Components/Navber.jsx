import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "../Components/Responsive.css"
export const Navber = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navName = <>
    <a className='list-Li-style'>Home</a>
    <a className='list-Li-style'>About</a>
    <a className='list-Li-style'>Service</a>
    <a className='list-Li-style'>Work</a>
    <a className='list-Li-style'>Team</a>
    <a className='list-Li-style'>Blog</a>
    <a className='list-Li-style'>Contact</a>
  </>



  return (
    <div className='nav-container'>
      <img src="https://tidytheme.com/tidytheme/aidiex/html/images/logo.png" alt="" />

      <div className={!menuOpen ? "nav-rapper" : "nav-rapper-hide"}>
        {navName}
      </div>

      <AiOutlineMenu onClick={toggleMenu} className='nav-manue-icon'></AiOutlineMenu>
    </div>
  )
}
