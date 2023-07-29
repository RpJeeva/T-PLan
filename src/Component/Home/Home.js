import React,{useEffect} from 'react'
import './Home.css'
import HomeVideo from '../../Asset/Video/ship.mp4'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Img1 from '../../Asset/Images/nat3.jpg'
import Img2 from '../../Asset/Images/ocean1.jpg'
import Img3 from '../../Asset/Images/nat1.jpg'
import Img4 from '../../Asset/Images/nat2.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <div className='home'>
        <div className='video'>
            <video autoPlay muted loop src={HomeVideo}>   
            </video>
        </div>
        <div className='content'>
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
        <p data-aos="fade-up">Discover the world's most adventurous nature,life is so short for a trip.</p>
        <div className='div-btn' data-aos="fade-up">
            <span>GET STARTED </span>
            <i><AiOutlineArrowRight/></i>
        </div>
        </div>

        <div className='popular'>
            <div className='heading' data-aos="fade-up">
                <span>Popular</span>
                <hr></hr>
            </div>
            <div className='pop-images' data-aos="fade-up">
                <img src={Img1} alt='flower'></img>
                <img src={Img2} alt='flower'></img>
                <img src={Img3} alt='flower'></img>
                <img src={Img4} alt='flower'></img>
            </div>
        </div>
    </div>
  )
}

export default Home
