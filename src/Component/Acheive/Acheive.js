import React,{useEffect} from 'react'
import './Acheive.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Acheive = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

  return (
    <div className='acheive container'>
        <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-6 col-12 list' data-aos="fade-up">
                <span>10</span>
                <p>World of Experience</p>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-12 list' data-aos="fade-up">
                <span>2K+</span>
                <p>Fine Destination</p>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-12 list' data-aos="fade-up">
                <span>10K+</span>
                <p>Customer Reviews</p>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-12 list' data-aos="fade-up">
                <span>4.8</span>
                <p>Overall Rating</p>
            </div>
        </div>
    </div>
  )
}

export default Acheive
