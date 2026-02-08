import React, { useState } from 'react'

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    facebook: '',
    phone: '',
    major: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Google Form configuration
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfyx9hXGvLfolZTrsXsOG2UP3fv7cklE2O-Ngqn8WbP5Ax_ng/formResponse'
    
    // Create FormData
    const formDataToSubmit = new FormData()
    formDataToSubmit.append('entry.458483274', formData.name)
    formDataToSubmit.append('entry.1569414496', formData.email)
    formDataToSubmit.append('entry.1633951729', formData.facebook)
    formDataToSubmit.append('entry.1017970780', formData.phone)
    formDataToSubmit.append('entry.1084436143', formData.major)
    formDataToSubmit.append('entry.775698569', formData.englishLevel)
    formDataToSubmit.append('entry.844662736', formData.codingLevel)
    formDataToSubmit.append('entry.568537434', formData.introduction)
    
    try {
      // Submit to Google Form
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit
      })
      
      // Show success message
      alert('Cảm ơn bạn đã đăng ký! Team Tí sẽ xem xét hồ sơ và liên hệ sớm nhất.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        facebook: '',
        phone: '',
        major: '',
        englishLevel: '',
        codingLevel: '',
        introduction: ''
      })
      
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Có lỗi xảy ra. Vui lòng thử lại sau.')
    }
  }

  return (
    <section className="section" id="registration">
      <div className="registration">
        <h2 className="section-title">Hình thức và chi phí tham gia</h2>
        
        <div className="price-tag">$450</div>
        
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
              placeholder="Câu trả lời của bạn"
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
              placeholder="Câu trả lời của bạn"
            />
          </div>

          <div className="form-group">
            <label htmlFor="facebook">Facebook (Link chính chủ - Team sẽ liên lạc nếu cần thiết) *</label>
            <input
              type="text"
              id="facebook"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              required
              placeholder="Câu trả lời của bạn"
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
              placeholder="Câu trả lời của bạn"
            />
          </div>

          <div className="form-group">
            <label htmlFor="major">Ngành học/ Công việc hiện tại: *</label>
            <select
              id="major"
              name="major"
              value={formData.major}
              onChange={handleChange}
              required
            >
              <option value="">Chọn...</option>
              <option value="Công nghệ Thông tin">Công nghệ Thông tin</option>
              <option value="Kỹ thuật Phần mềm">Kỹ thuật Phần mềm</option>
              <option value="Khoa học Máy tính">Khoa học Máy tính</option>
              <option value="Hệ thống Thông tin">Hệ thống Thông tin</option>
              <option value="Trí tuệ Nhân tạo">Trí tuệ Nhân tạo</option>
              <option value="Data Science">Data Science</option>
              <option value="Data Engineering">Data Engineering</option>
              <option value="Khác">Khác</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="englishLevel">Trình độ Tiếng Anh *</label>
            <select
              id="englishLevel"
              name="englishLevel"
              value={formData.englishLevel}
              onChange={handleChange}
              required
            >
              <option value="">Chọn...</option>
              <option value="Cơ bản  (IELTS: band 1-3 hoặc TOEIC: 120-550)">Cơ bản  (IELTS: band 1-3 hoặc TOEIC: 120-550)</option>
              <option value="Trung cấp (IELTS: band 3.5-5.5 hoặc TOEIC: 550-785)">Trung cấp (IELTS: band 3.5-5.5 hoặc TOEIC: 550-785)</option>
              <option value="Nâng cao (IELTS: band 6-9 hoặc TOEIC: 785-990)">Nâng cao (IELTS: band 6-9 hoặc TOEIC: 785-990)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="codingLevel">Trình độ code (chỉ tính môn DSA hoặc giải Leetcode) *</label>
            <select
              id="codingLevel"
              name="codingLevel"
              value={formData.codingLevel}
              onChange={handleChange}
              required
            >
              <option value="">Chọn...</option>
              <option value="Cơ bản (chưa học môn DSA bao giờ hoặc học rồi nhưng quên hết rồi)">Cơ bản (chưa học môn DSA bao giờ hoặc học rồi nhưng quên hết rồi)</option>
              <option value="Trung bình (có thể giải các bài tập thuật toán/Leetcode mức độ dễ/easy)">Trung bình (có thể giải các bài tập thuật toán/Leetcode mức độ dễ/easy)</option>
              <option value="Khá (có thể giải các bài tập thuật toán/Leetcode mức độ trung bình/medium)">Khá (có thể giải các bài tập thuật toán/Leetcode mức độ trung bình/medium)</option>
              <option value="Giỏi (có thể giải các bài tập thuật toán/Leetcode mức độ khó/hard)">Giỏi (có thể giải các bài tập thuật toán/Leetcode mức độ khó/hard)</option>
              <option value="Khác">Khác</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="introduction">Giới thiệu nhiều hơn về background, mục tiêu của bạn để team mình có cơ hội hiểu bạn hơn nhé! *</label>
            <textarea
              id="introduction"
              name="introduction"
              value={formData.introduction}
              onChange={handleChange}
              required
              placeholder="Câu trả lời của bạn"
            />
          </div>

          <button type="submit" className="submit-btn">
            Gửi
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '30px', color: 'rgba(255, 255, 255, 0.6)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif', lineHeight: '1.6' }}>
          Team Tí sẽ xem xét kỹ hồ sơ của bạn (có thể gọi điện trực tiếp nếu cần). Nếu số lượng vượt quá kỳ vọng hoặc hồ sơ chưa phù hợp, mong bạn thông cảm và đợi đợt thông báo tiếp theo nhé!
        </p>
      </div>
    </section>
  )
}

export default Registration
