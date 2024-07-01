import React from 'react'
import smile from "../assets/smiling.svg"
import "../Styles/Hero.css"
const Hero = () => {
  return (
    <>        
       
        {/* <!-- hero section  --> */}
        <section className=" container hero-section d-md-flex">
            <div  className=" hero-content">
              <p>Hey, I am John</p>
              <h1 className='font'>I develop dynamic and user-Centered Web Applications</h1>
                <p className='widthh'>
                  My expertise spans both front-end and back-end 
                  development, enabling me to build comprehensive solutions
                  that meet diverse client needs
                </p>
    <button className='button'>Get in Touch</button>
            </div>
            <div className='imagee'>
              <img src={smile}alt="" className='img-fluid' />
            </div>
        </section>
    


    </>
  )
}

export default Hero