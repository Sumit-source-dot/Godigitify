import React from 'react'
import './index.css'
import HeroSection from './components/hero'
import Testimonial23 from './components/clientReview'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ChooseExpert from './components/chooseExpert'
import Faq from './components/faq'
import About from './components/about'

function App() {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <section id="about">
     <About/>
     </section>
    
     <ChooseExpert/>
     <section id="review">
     <Testimonial23/>
     </section>
     <Faq/>
     <Footer/>

    </div>
  )
}

export default App
