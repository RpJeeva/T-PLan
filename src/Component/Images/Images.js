import React,{useEffect} from 'react'
import './Images.css'
import {MdLocationOn} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Images = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
},[])
  return (
    <div className='images container-lg'>
         <ul className='list' data-aos="fade-up">
            <li className='active'>All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
         </ul>

         <div className='img' data-aos="fade-up">
            <div className='img1 align' data-aos="fade-up">
              <div className='place'>
                <p data-aos="fade-up">Seychelles Party</p>
                <span data-aos="fade-up"><MdLocationOn/> Indian Party</span>
              </div>
              <div className='rate'>
                <span data-aos="fade-up">4.7</span>
              </div>
            </div>
            <div className='img2 align' data-aos="fade-up">
            <div className='place'>
                <p data-aos="fade-up">Seychelles Party</p>
                <span data-aos="fade-up"><MdLocationOn/> Indian Party</span>
              </div>
              <div className='rate'>
                <span data-aos="fade-up">4.7</span>
              </div>
            </div>
            <div className='img3 align' data-aos="fade-up">
            <div className='place'>
                <p data-aos="fade-up">Seychelles Party</p>
                <span data-aos="fade-up"><MdLocationOn/> Indian Party</span>
              </div>
              <div className='rate'>
                <span data-aos="fade-up">4.7</span>
              </div>
            </div>
            <div className='img4 align' data-aos="fade-up">
            <div className='place'>
                <p data-aos="fade-up">Seychelles Party</p>
                <span data-aos="fade-up"><MdLocationOn/> Indian Party</span>
              </div>
              <div className='rate'>
                <span data-aos="fade-up">4.7</span>
              </div>
            </div>
            <div className='img5 align' data-aos="fade-up">
            <div className='place'>
                <p data-aos="fade-up">Seychelles Party</p>
                <span data-aos="fade-up"><MdLocationOn/> Indian Party</span>
              </div>
              <div className='rate'>
                <span data-aos="fade-up">4.7</span>
              </div>
            </div>
            <div className='img6 align' data-aos="fade-up">
            <div className='place'>
                <p data-aos="fade-up">Seychelles Party</p>
                <span data-aos="fade-up"><MdLocationOn/> Indian Party</span>
              </div>
              <div className='rate'>
                <span data-aos="fade-up">4.7</span>
              </div>
            </div>
            <div className='img7 align' data-aos="fade-up">
            <div className='place'>
                <p data-aos="fade-up">Seychelles Party</p>
                <span data-aos="fade-up"><MdLocationOn/> Indian Party</span>
              </div>
              <div className='rate'>
                <span data-aos="fade-up">4.7</span>
              </div>
            </div>
            <div className='img8 align' data-aos="fade-up">
            <div className='place'>
                <p data-aos="fade-up">Seychelles Party</p>
                <span data-aos="fade-up"><MdLocationOn/> Indian Party</span>
              </div>
              <div className='rate'>
                <span data-aos="fade-up">4.7</span>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Images
