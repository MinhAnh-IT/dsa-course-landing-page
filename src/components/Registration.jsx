import React, { useState } from 'react'

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentJob: '',
    englishLevel: '',
    codingLevel: '',
    introduction: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Cảm ơn bạn đã đăng ký! Team Tí sẽ xem xét hồ sơ và liên hệ sớm nhất.')
    console.log('Form submitted:', formData)
  }

  return (
    <section className="section" id="registration">
      <div className="registration">
        <h2 className="section-title">Hình thức và chi phí tham gia</h2>
        
        <div className="price-tag">$450</div>
        <p className="price-description" style={{ marginBottom: '20px' }}>
          cho toàn bộ chương trình
        </p>
        
        <div className="info-section">
          <ul className="info-list">
            <li><strong>3 tháng</strong> (24+ buổi meeting online qua Zoom + Facebook)</li>
            <li><strong>12+ buổi</strong> Tí sẽ trực tiếp cùng thảo luận về lý thuyết, bài tập, mock interview và chia sẻ kinh nghiệm.</li>
            <li><strong>12+ buổi</strong> tối khác với TA để giải thêm bài tập và ôn lại kiến thức.</li>
          </ul>
        </div>

        <div className="info-section">
          <ul className="info-list">
            <li>Đọc kỹ các câu hỏi thường gặp và điền form đăng ký nếu bạn thực sự muốn tham gia và chiến hết mình cùng team.</li>
            <li>Sau khi đăng ký, team sẽ xem xét hồ sơ và thông báo sớm nhất nếu bạn phù hợp.</li>
            <li>Sau khi được nhận, bạn sẽ được thêm vào nhóm Facebook và Zoom riêng để nhận thông báo tiếp theo.</li>
          </ul>
        </div>


        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Họ và Tên *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nhập họ và tên của bạn"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Số điện thoại *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+84 xxx xxx xxx"
            />
          </div>

          <div className="form-group">
            <label htmlFor="currentJob">Ngành học hiện tại / Công việc hiện tại *</label>
            <input
              type="text"
              id="currentJob"
              name="currentJob"
              value={formData.currentJob}
              onChange={handleChange}
              required
              placeholder="Ví dụ: Sinh viên CNTT, Software Engineer, ..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="englishLevel">Trình độ Tiếng Anh *</label>
            <input
              type="text"
              id="englishLevel"
              name="englishLevel"
              value={formData.englishLevel}
              onChange={handleChange}
              required
              placeholder="Ví dụ: IELTS 6.5, TOEIC 750, ..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="codingLevel">Trình độ code (chỉ tính môn DSA hoặc giải Leetcode) *</label>
            <input
              type="text"
              id="codingLevel"
              name="codingLevel"
              value={formData.codingLevel}
              onChange={handleChange}
              required
              placeholder="Ví dụ: Beginner, đã làm 50 bài Leetcode, ..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="introduction">Giới thiệu về bạn *</label>
            <textarea
              id="introduction"
              name="introduction"
              value={formData.introduction}
              onChange={handleChange}
              required
              placeholder="Hãy cho Tí biết thêm về bạn, mục tiêu của bạn, và tại sao bạn muốn tham gia chương trình này..."
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '30px', color: 'rgba(255, 255, 255, 0.6)' }}>
          Team Tí sẽ xem xét kỹ hồ sơ của bạn (có thể gọi điện trực tiếp nếu cần). Nếu số lượng vượt quá kỳ vọng hoặc hồ sơ chưa phù hợp, mong bạn thông cảm và đợi đợt thông báo tiếp theo nhé!
        </p>
      </div>
    </section>
  )
}

export default Registration
