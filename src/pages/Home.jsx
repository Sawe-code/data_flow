import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import CTA from '../components/Cta'
import BeforeAfter from '../components/BeforeAfter'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero />
      <Features />
      <BeforeAfter />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home