import { useState } from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'
import Contact from './Components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
