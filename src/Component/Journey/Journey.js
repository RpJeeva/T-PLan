import React,{useEffect} from 'react'
import './Journey.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Alone from '../../Asset/Images/alone girl.jpg'
const Journey = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div className='journey container mt-md-5 mt-4'>
        <div className='row'>
            <div className='col-lg-6 col-md-12 png-img'>
                <img src={Alone} alt="alone" className='img-fluid' data-aos="fade-up"/>
            </div>
            <div className='col-lg-6 col-md-12 mt-3 content'>
                    <h1 data-aos="fade-up">Best way to start your Journey!</h1>
                    <p data-aos="fade-up">We offer personalized itineraties tailored to individual preferences and interests</p>
                    <button className='start' data-aos="fade-up">start Here</button>
            </div>
        </div>
    </div>
  )
}

export default Journey
