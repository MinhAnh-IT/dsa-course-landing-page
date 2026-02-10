import React, { Suspense, lazy } from 'react'

// Import Video ngay vì nó là phần hero section
import Video from './components/Video'

// Lazy load các components không cần thiết ngay lập tức
const Roadmap = lazy(() => import('./components/Roadmap'))
const Registration = lazy(() => import('./components/Registration'))
const Feedback = lazy(() => import('./components/Feedback'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '200px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    opacity: 0.6 
  }}>
    <div>Đang tải...</div>
  </div>
)

function App() {
  return (
    <div className="app">
      <Video />
      <div className="section-divider wave-inverse"></div>
      
      <Suspense fallback={<LoadingFallback />}>
        <Roadmap />
      </Suspense>
      
      <div className="section-divider gradient"></div>
      
      <Suspense fallback={<LoadingFallback />}>
        <Registration />
      </Suspense>
      
      <div className="section-divider wave"></div>
      
      <Suspense fallback={<LoadingFallback />}>
        <Feedback />
      </Suspense>
      
      <div className="section-divider gradient"></div>
      
      <Suspense fallback={<LoadingFallback />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
