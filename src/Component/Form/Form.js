import React,{useEffect} from 'react'
import './Form.css'
import {MdLocationOn} from 'react-icons/md'
import {AiFillCreditCard,AiOutlineSearch} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Form = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <div className='form container-fluid'>
        <p className='text-center orange' data-aos="fade-up">EXPLORE NOW</p>
        <h1 className='text-center' data-aos="fade-up">Find Your Dream Destination</h1>
        <p className='text-center' data-aos="fade-up">Fill in the fields Below to find best spot for your next tour</p>
        <div className='row'>
            <div className='col-lg-2 col-md-5 col-sm-5 mt-2 input' data-aos="fade-up">
                <i className='pt-1'><MdLocationOn/></i>
                <input type='text' placeholder='Location' className='form-control' data-aos="fade-up"></input>
            </div>
            <div className='col-lg-2 col-md-5 mt-2 col-sm-5 input' data-aos="fade-up">
                <i className='pt-1'><AiFillCreditCard/></i>
                <input type='text' placeholder='Budget' className='form-control' data-aos="fade-up"></input>
            </div>
            <div className='col-lg-2 col-md-5 mt-2 col-sm-5 input' data-aos="fade-up">
                <input type="date" placeholder='Date' className='form-control' data-aos="fade-up"></input>
            </div>
            <div className='col-lg-2 col-md-5 mt-2 col-sm-5 input' data-aos="fade-up">
            <button className='btn btn-block'><AiOutlineSearch/>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Form
