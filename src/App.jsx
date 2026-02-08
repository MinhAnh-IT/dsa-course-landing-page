import React from 'react'
import Video from './components/Video'
import Curriculum from './components/Curriculum'
import Roadmap from './components/Roadmap'
import Registration from './components/Registration'
import Feedback from './components/Feedback'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Video />
      <div className="section-divider wave-inverse"></div>
      <Roadmap />
      <div className="section-divider gradient"></div>
      <Registration />
      <div className="section-divider wave"></div>
      <Feedback />
      <div className="section-divider gradient"></div>
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
