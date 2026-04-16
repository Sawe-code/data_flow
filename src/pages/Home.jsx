import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import CTA from '../components/Cta'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </div>
  )
}

export default Home