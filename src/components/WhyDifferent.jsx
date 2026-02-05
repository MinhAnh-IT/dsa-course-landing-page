import React from 'react'

function WhyDifferent() {
  return (
    <section className="why-different section" id="why-different">
      <h2 className="section-title">Điều gì làm chương trình khác biệt?</h2>
      
      <div className="different-content">
        <div className="different-main">
          <p className="different-text">
            Nhiều chương trình học hiện nay quá tập trung vào <strong>lý thuyết</strong> hoặc <strong>giải bài theo khuôn mẫu</strong>.
          </p>
          <p className="different-highlight">
            Chương trình này được <span className="highlight-bold">thiết kế xoay quanh phỏng vấn thực tế</span>, không dạy DSA theo hướng học thuật mà tập trung vào việc chọn đúng hướng tiếp cận.
          </p>
        </div>

        <div className="learning-method">
          <h3 className="method-title">
            <span className="icon">📚</span>
            Phương pháp học tập
          </h3>
          <div className="method-cards">
            <div className="method-card">
              <div className="method-icon">👥</div>
              <h4>Học tập chủ động</h4>
              <p>Tham gia tích cực vào các buổi thảo luận và giải quyết vấn đề thực tế</p>
            </div>
            <div className="method-card">
              <div className="method-icon">🎯</div>
              <h4>Thực hành phỏng vấn</h4>
              <p>Mock interview và feedback trực tiếp từ Tí và team TAs</p>
            </div>
            <div className="method-card">
              <div className="method-icon">💡</div>
              <h4>Tư duy giải quyết vấn đề</h4>
              <p>Học cách phân tích và chọn approach phù hợp, không chỉ học thuộc lòng</p>
            </div>
          </div>
        </div>

        <div className="program-benefits">
          <h3 className="benefits-title">✨ Điểm nổi bật của chương trình</h3>
          <ul className="benefits-list">
            <li>
              <span className="benefit-icon">✅</span>
              <div>
                <strong>Không chỉ lý thuyết:</strong> Tập trung vào kỹ năng phỏng vấn thực tế tại các công ty công nghệ hàng đầu
              </div>
            </li>
            <li>
              <span className="benefit-icon">✅</span>
              <div>
                <strong>Mentor 1-1:</strong> Tí và TAs trực tiếp hướng dẫn và giải đáp thắc mắc
              </div>
            </li>
            <li>
              <span className="benefit-icon">✅</span>
              <div>
                <strong>Lộ trình rõ ràng:</strong> Từ cơ bản đến nâng cao, phù hợp cho beginners
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhyDifferent
