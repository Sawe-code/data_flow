import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'

const App = () => {
  return (
    <main className='min-h-screen '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App