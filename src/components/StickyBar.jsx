import React, { useState, useEffect } from 'react'

function StickyBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration')
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`sticky-cta-bar ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-content">
        <div className="sticky-info">
          <span className="sticky-title">🚀 Bắt đầu hành trình DSA</span>
          <span className="sticky-price">Chỉ $450 • Khai giảng 03/2026</span>
        </div>
        <button className="sticky-btn" onClick={scrollToRegistration}>
          Đăng ký ngay
        </button>
      </div>
    </div>
  )
}

export default StickyBar
