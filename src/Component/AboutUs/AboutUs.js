import React,{useEffect} from 'react'
import './AboutUs.css'
import {FaHandHoldingMedical} from 'react-icons/fa'
import {BiSolidLocationPlus} from 'react-icons/bi'
import {ImHeadphones} from 'react-icons/im'
import Flower from '../../Asset/Images/flower.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const AboutUs = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <div className='about container-lg'>
        <div className='row'>
            <div className='col-lg-6 con'>
                <h1 data-aos="fade-up">Why Should You Choose Us</h1>
                <p data-aos="fade-up">We Have extensive knowledge and experience the travel industry</p>

                <div className='about-us mt-md-5 mt-2'>
                    <div className='service d-flex'>
                        <i data-aos="fade-up"><FaHandHoldingMedical/></i>
                        <div className='work mx-md-5 mx-2'>
                            <h3 data-aos="fade-up">Safety and support</h3>
                            <p data-aos="fade-up">out top priority is the safety and well being of our clients. we maintain
                                high safety standards and have emergency support available during the trip.
                            </p>
                        </div>
                    </div>
                    <div className='service'>
                        <i data-aos="fade-up"> <BiSolidLocationPlus/></i>
                        <div className='work mx-md-5 mx-2'>
                            <h3 data-aos="fade-up">Diverse Range of Destinations</h3>
                            <p data-aos="fade-up">wheather it's domestic tour or an international adventure, we cover a wide Rangeof Destination
                                to cater to different interests and preferences.
                            </p>
                        </div>
                    </div>
                    <div className='service'>
                        <i data-aos="fade-up"><ImHeadphones/></i>
                        <div className='work mx-md-5 mx-2'>
                            <h3 data-aos="fade-up">24/7 Customer Support</h3>
                            <p data-aos="fade-up">our dedicated customer support teams is available round the clock to address
                                any queries or concerns before,during and after the trip.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 image' data-aos="fade-up">
                <div className='bg-img position-relative'>
                <img src={Flower} alt='flower' className='img-fluid flower' data-aos="fade-up"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
