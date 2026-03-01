import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./components/HomePage'))
const Homework = lazy(() => import('./components/Homework'))
const ProblemDescription = lazy(() => import('./components/ProblemDescription'))

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    opacity: 0.6,
    background: '#000000',
    color: '#ffffff'
  }}>
    <div>Đang tải...</div>
  </div>
)

/**
 * App Component - Main router configuration
 * Routes:
 * - / : Main landing page
 * - /homework : Practice problems page
 * - /problem/:problemSlug : Problem description page for premium problems
 */
function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/problem/:problemSlug" element={<ProblemDescription />} />
      </Routes>
    </Suspense>
  )
}

export default App
