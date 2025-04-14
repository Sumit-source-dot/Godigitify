import React from 'react'
import './index.css'
import HeroSection from './components/hero'
import Testimonial23 from './components/clientReview'
import Navbar from './components/navbar'
import Footer from './components/footer'
// import ChooseExpert from './components/chooseExpert'
function App() {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <Testimonial23/>
     {/* <ChooseExpert/> */}
     <Footer/>    

    </div>
  )
}

export default App
