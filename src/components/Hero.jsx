import React from 'react'

function Hero() {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration')
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToNext = () => {
    const videoSection = document.querySelector('.video-section')
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">500+ ENROLLED STUDENTS</div>
        <div className="hero-subtitle-top">DATA STRUCTURES & ALGORITHM</div>
        <h1>CHƯƠNG TRÌNH MENTOR MÔN DSA_TICUNGBIM 2026</h1>
        <div className="hero-info-bar">
          <div className="hero-info-item">
            <span className="info-label">KHAI GIẢNG</span>
            <span className="info-value">03/2026</span>
          </div>
          <div className="hero-info-item">
            <span className="info-label">THỜI LƯỢNG</span>
            <span className="info-value">3 THÁNG</span>
          </div>
          <div className="hero-info-item">
            <span className="info-label">HÌNH THỨC</span>
            <span className="info-value">ONLINE</span>
          </div>
        </div>
        <p className="hero-description">
          Nhóm hiện tại mà team Tí đang mentor có thể nói là thành công nhất. Tí + TAs đã có nhiều kinh nghiệm hơn về việc tổ chức, chia sẻ, cũng như cách làm việc, làm sao để mọi thứ trở nên hiệu quả hơn! Tí cùng team đã sẵn sàng để tiếp tục mentor thêm nhóm mới vào tháng 3/2026.
        </p>
        
        <div className="hero-cta-wrapper">
          <div className="hero-highlight">🎯 BEST PROGRAM FOR BEGINNERS</div>
          <button className="hero-cta" onClick={scrollToRegistration}>
            ĐIỀN FORM ĐĂNG KÍ NGAY
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToNext}>
        <div className="scroll-arrow">↓</div>
        <span>Scroll để khám phá</span>
      </div>
    </section>
  )
}

export default Hero
