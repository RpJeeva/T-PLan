import React, { useState } from 'react'
import {CgMenuGridO} from 'react-icons/cg'
import {AiFillCloseCircle} from 'react-icons/ai'
import './Navbar.css'
const Navbar = () => {
    const [Navbar,setNavbar] = useState('menu')

    const showNavbar = () =>{
        setNavbar('menu show')
    }

    const closeNavbar = () =>{
        setNavbar('menu')
    }
  return (
    <div className='navbar'>
         <span>t-PLan</span>
         <ul className={Navbar}>
            <li>Destination</li>
            <li>About us</li>
            <li>Testimonial</li>
            <li>Gallery</li>
            <i className='close' onClick={closeNavbar}><AiFillCloseCircle/></i>
         </ul>
         <button className='sign'>sign up</button>
         <div className='dash'>
         <button className='sign-btn'>sign up</button>
            <i onClick={showNavbar}><CgMenuGridO/></i>
         </div>
    </div>
  )
}

export default Navbar
