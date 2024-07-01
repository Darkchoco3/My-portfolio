import React from 'react'
import '../Styles/Portfolio.css'
import { Icon } from "@iconify/react";
import AhuseImg from '../assets/Image1port.svg'
import AppImg from '../assets/Image2port.svg'
import EasyImg from '../assets/Image3port.svg'


const Portfolio = () => {
  return (
    <>
    <main className='container Hero mt-5 mb-5 '> 
    <p>Recent Projects</p>

    {/* div for portfolio and button */}
    <div className='d-flex justify-content-between'> 
    <h1>My Portfolio</h1>
    <button className='git rounded'> <Icon icon="mdi:github"/> Visit My GitHub</button>
    </div>

    <section className='d-lg-flex gap-5 mt-4'> 

{/* Ahuse Card */}
<div className="card p-3 card1">
              <img src={AhuseImg} style={{ width: 'auto' }} alt="ahuse-icon"  />
              <div>
                <h6 className=" mt-3 ">Ahuse</h6>
                <p className="hero2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <button className='btn border-bottom  btn-light'> View Website ↗ </button>
              </div>
  </div>

  {/* App Dashboard Card */}
<div className="card p-3 card1">
              <img src={AppImg} style={{ width: 'auto' }} alt="app-icon"  />
              <div>
                <h6 className=" mt-3">App Dashboard</h6>
                <p className="hero2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <button className='btn border-bottom  btn-light'> View Project ↗ </button>
              </div>
  </div>

  {/* Easy Rent */}
  <div className="card p-3 card1">
              <img src={EasyImg} style={{ width: 'auto' }} alt="Easy-icon"  />
              <div>
                <h6 className="mt-3">Easy Rent</h6>
                <p className="hero2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <p>
                <button className='btn border-bottom  btn-light'> View Website ↗ </button>
                </p>
              </div>
  </div>
</section>
    </main>
                 
    
    </>
  )
}

export default Portfolio