import React,{useEffect} from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {PiInstagramLogoFill} from 'react-icons/pi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
  return (
    <div className='footer container-fluid mt-5'>
       <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-6 footer-con mt-4 col-12'>
            <span className='logo'>t-PLAN</span>
            <div className='icon'>
                <i ><BsFacebook data-aos="fade-up"/></i>
                <i ><AiFillTwitterCircle/></i>
                <i ><PiInstagramLogoFill/></i>
            </div>
           </div>
            <div className='col-lg-3 col-md-3 col-sm-6 footer-con mt-4 col-12' data-aos="fade-up">
                <h3 data-aos="fade-up">information</h3>
                <div className='list'>
                    <span >Home</span>
                    <span >Explore</span>
                    <span >Travel</span>
                    <span >Blog</span>
                </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 footer-con mt-4 col-12' data-aos="fade-up">
                <h3>Helpful Links</h3>
                <div className='list'>
                    <span >Destination</span>
                    <span>Support</span>
                    <span >Travel & Condition</span>
                    <span >Privacy</span>
                </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 mt-4 footer-con col-12' data-aos="fade-up">
                <h3 data-aos="fade-up">conduct details</h3>
                <div className='list'>
                    <span >+916382016639</span>
                    <span >rjeeva638291@gmail.com</span>
                </div>
            </div>
          
       </div>
    </div>
  )
}

export default Footer
