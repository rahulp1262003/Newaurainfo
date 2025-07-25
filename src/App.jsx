// import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/Services'
import ContactSection from './components/ContactUS'
import AboutSection from './components/About'
import Footer from './components/Footer'
import ProjectSection from './components/Project'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App