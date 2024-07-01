import React from 'react'
import Phone from "../assets/phonee.svg"
import BrandImg from "../assets/Branding & Logo.svg"
import DesignImg from "../assets/UI & UX Design.svg"
import FlowImg from "../assets/Webflow Development.svg"
import "../Styles/Skills.css"
const Skills = () => {
  return (
    <>
    <div className='d-flex gap-3'>

    <main className='container mt-5 d-none d-lg-block'>  
<p className='mt-4 card-text'> My Skills </p>
<h3 className='card-text'> My Expertise </h3>
<section className='d-flex gap-5 mt-4'> 

{/* Responsive Card */}
<div className="card p-3 card1">
              <img src={Phone} style={{ width: '3rem' }} alt="mobile-icon"  />
              <div>
                <h4 className="">Responsive Design</h4>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
  </div>
{/* Front-End Card */}
<div className="card p-3 card2">
              <img src={BrandImg} style={{ width: '3rem' }}  alt="tag-icon" />
              <div>
                <h4 className="card-h4">Front-End Frameworks</h4>
                <p className="card-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
  </div>

{/* Testing card */}
<div className="card p-3 card3">
              <img src={DesignImg} style={{ width: '3rem' }} alt="Rotate-icon"/>
              <div>
                <h4 className="card-h4">Testing and Debugging</h4>
                <p className="card-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
  </div>

  {/* Cloud Card */}
<div className="card p-3 card4">
              <img src={FlowImg} style={{ width: '3rem' }} alt="Bracket-icon" />
              <div>
                <h4 className="card-h4">Cloud Services</h4>
                <p className="card-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
  </div>
</section>
</main>
    </div>

    </>
  )
}

export default Skills