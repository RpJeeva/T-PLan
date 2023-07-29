import React,{useEffect} from 'react'
import './Question.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Question = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <div className='question container-lg mt-3'>
        <div className='row'>
            <div className='col-md-6 ask'>
                <h2 data-aos="fade-up">Frequently Asked Question</h2>

                <div className="accordion mt-lg-5" id="accordionExample">
                    <div className="accordion-item mt-3">
                        <h2 className="accordion-header" data-aos="fade-up">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How do i choose the right travel destination for me
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" data-aos="fade-up">
                            consider your interests budget, desried experience, and the type of environment
                            you enjoy.Reasearch destination that align with your preferences and offer attraction
                            or activities you find applealing
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item mt-3">
                        <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="true" data-aos="fade-up" aria-controls="collapseOne">
                            How do i choose the right travel destination for me
                        </button>
                        </h2>
                        <div id="collapsetwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" data-aos="fade-up">
                            consider your interests budget, desried experience, and the type of environment
                            you enjoy.Reasearch destination that align with your preferences and offer attraction
                            or activities you find applealing
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item mt-3">
                        <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-aos="fade-up" data-bs-target="#collapsethree" aria-expanded="true" aria-controls="collapseOne">
                            How do i choose the right travel destination for me
                        </button>
                        </h2>
                        <div id="collapsethree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" data-aos="fade-up">
                            consider your interests budget, desried experience, and the type of environment
                            you enjoy.Reasearch destination that align with your preferences and offer attraction
                            or activities you find applealing
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item mt-3">
                        <h2 className="accordion-header">
                        <button className="accordion-button" data-aos="fade-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapseOne">
                            How do i choose the right travel destination for me
                        </button>
                        </h2>
                        <div id="collapsefour" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" data-aos="fade-up">
                            consider your interests budget, desried experience, and the type of environment
                            you enjoy.Reasearch destination that align with your preferences and offer attraction
                            or activities you find applealing
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-md-6 email mt-3'>
                <h1 data-aos="fade-up">Do you have any specific question?</h1>
                <p data-aos="fade-up">Please Fill the Form below and our dedicated  team will get intouch with you
                    as soon as posible
                </p>
                <div className='form-group'>
                    <input type='email' data-aos="fade-up" placeholder='email' className='form-control'></input>
                </div>
                <div className='form-group'>
                    <textarea type='email' data-aos="fade-up" placeholder='Enter your Question here' className='form-control' rows="4"></textarea>
                </div>
                <div className='button d-grid '>
                <button className='btn btn-block mt-2' data-aos="fade-up">Submit Query</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question
