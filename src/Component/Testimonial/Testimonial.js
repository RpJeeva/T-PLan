import React,{useEffect} from 'react'
import './Testimonial.css'
import {AiFillStar} from 'react-icons/ai'
import Profile1 from '../../Asset/Images/profile1.jpg'
import Profile2 from '../../Asset/Images/profile2.jpg'
import Profile3 from '../../Asset/Images/profile3.jpg'
import Profile4 from '../../Asset/Images/profile4.jpg'
import BgColor from '../../Asset/Images/rela2.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Testimonial = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div className='testimonial container-lg'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 report'>
        <span className='' data-aos="fade-up">FROM OUR CLIENTS</span>
        <h1 className='mb-3 mt-2' data-aos="fade-up">Real Travel History From Our Beloved Clients</h1>
        <p data-aos="fade-up">By Choosing Us as their agency,customer can expect an anriching and enjoyable
            travel expectation,filled with unforgetable memories that will last a lifetime
        </p>
        <div className='icons' data-aos="fade-up">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <div className='image d-flex mt-2'>
            <div className='box mx-1'>
            <img src={Profile1} alt='profile1' className='img-fluid' data-aos="fade-up"/>
            </div>
            <div className='box mx-1'>
            <img src={Profile2} alt='profile2' className='img-fluid' data-aos="fade-up"/>
            </div>
            <div className='box mx-1'>
            <img src={Profile3} alt='profile3' className='img-fluid' data-aos="fade-up"/>
            </div>
            <div className='box mx-1'>
            <img src={Profile4} alt='profile4' className='img-fluid' data-aos="fade-up"/>
            </div>
        </div>
        </div>
        <div className='col-lg-6 col-md-6 bg-image'>
            <img src={BgColor} alt='bgcolor' className='img-fluid mt-lg-1 mt-md-2' data-aos="fade-up"/>
        </div>
        </div>
    </div>
  )
}

export default Testimonial
