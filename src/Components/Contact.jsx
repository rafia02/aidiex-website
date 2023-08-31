import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";

export const Contact = () => {
    return (
        <div className='contact-rapper'>
            <h1 id='text-title'>Contact Us</h1>

            <div className='contact-main-container'>

                <div className='contact-container'>
                    <MdOutlineLocationOn id='icon'></MdOutlineLocationOn>
                    <div>
                        <h5>Aidiex</h5>
                        <span>California, USA</span>
                    </div>
                </div>

                <div className='contact-container'>
                    <BsFillTelephoneFill id='icon'></BsFillTelephoneFill>
                    <div>
                        <h5>Call Free Number</h5>
                        <span>0 (245) 378-6748</span>
                    </div>
                </div>

                <div className='contact-container'>
                    <FaRegClock id='icon'></FaRegClock>
                    <div>
                        <h5>Opening Hours</h5>
                        <span>Mon - Fri 9am - 6 pm</span>
                    </div>
                </div>
            </div>


            <form  action="">
                <div className='form-box'>
                    <div className='inpt-container'>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Number' />
                    </div>
                    <textarea id="" cols="30" rows="10" placeholder='Message'></textarea>
                </div>
                <button className='button-style'>Submit</button>
            </form>
        </div>
    )
}
