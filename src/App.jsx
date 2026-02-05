import React from 'react'
import Hero from './components/Hero'
import Video from './components/Video'
import StatsCounter from './components/StatsCounter'
import WhyDifferent from './components/WhyDifferent'
import Curriculum from './components/Curriculum'
import WhatYouGet from './components/WhatYouGet'
import Registration from './components/Registration'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'

function App() {
  return (
    <div className="app">
      <Hero />
      <div className="section-divider wave"></div>
      <Video />
      <StatsCounter />
      <div className="section-divider gradient"></div>
      <WhyDifferent />
      <div className="section-divider dots"></div>
      <Curriculum />
      <div className="section-divider gradient"></div>
      <WhatYouGet />
      <div className="section-divider wave-inverse"></div>
      <Registration />
      <div className="section-divider gradient"></div>
      <FAQ />
      <Footer />
      <StickyBar />
    </div>
  )
}

export default App
