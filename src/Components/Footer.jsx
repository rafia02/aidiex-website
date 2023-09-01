import React from 'react'
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { RiPinterestLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";




export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="menu-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Mission & Vision</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
        <div className="menu-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">Digital Marketing</a></li>
          </ul>
        </div>
        <div className="menu-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="#">Email : abc@gmail.com</a></li>
            <li><a href="#">Phone : +01547525</a></li>
            <li><a href="#">Address : California, USA</a></li>
          </ul>
        </div>


        <div className="menu-section">
          <img src="https://tidytheme.com/tidytheme/aidiex/html/images/lfooter_ogo.png" alt="" />
          <ul>
            <li><a href="#">Aidiex  is Corporate website design and buld website</a></li>
            <li><a href="#">
              <FaFacebookF className='social-icon'></FaFacebookF>
              <RiPinterestLine className='social-icon'></RiPinterestLine>
              <BsTwitter className='social-icon'></BsTwitter>
              <FaLinkedinIn className='social-icon'></FaLinkedinIn>
            </a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
