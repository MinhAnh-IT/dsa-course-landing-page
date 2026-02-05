import React from 'react'

function Feedback() {
  return (
    <section className="feedback section" id="feedback">
      <h2 className="section-title">Feedback của học viên</h2>
      <p className="section-subtitle">
        Dưới đây là những niềm vui mà team Tí nhận được từ các bạn học viên
      </p>
      
      <div className="feedback-grid">
        <div className="feedback-card">
          <p className="feedback-text">
            "Chương trình rất bổ ích, giúp mình có nền tảng vững chắc về DSA. Tí và team rất nhiệt tình!"
          </p>
          <div className="feedback-author">- Học viên khóa 2025</div>
        </div>
        
        <div className="feedback-card">
          <p className="feedback-text">
            "Mock interview giúp mình tự tin hơn rất nhiều khi phỏng vấn thật. Cảm ơn Tí và team!"
          </p>
          <div className="feedback-author">- Học viên khóa 2025</div>
        </div>
        
        <div className="feedback-card">
          <p className="feedback-text">
            "Lộ trình học rất rõ ràng, bài tập phong phú. Sau 3 tháng mình đã pass được vòng technical của Google!"
          </p>
          <div className="feedback-author">- Học viên khóa 2025</div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
