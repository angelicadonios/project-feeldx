import React from 'react'
import "./App.css";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Proposal from './components/Proposal'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Proposal />
      <Clients />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App