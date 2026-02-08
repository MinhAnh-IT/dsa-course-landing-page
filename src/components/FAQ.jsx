import React, { useState } from 'react'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "Vì sao có AI rồi mà vẫn phỏng vấn thuật toán (Coding Interview)?",
      answer: "Vì họ không tuyển người biết gõ code, mà tuyển người biết suy nghĩ và xây dựng giải pháp. Coding là cách nhanh nhất để đánh giá tư duy thật của ứng viên. Họ kiểm tra cách phân tích vấn đề, ra quyết định và giải thích, không chỉ code đúng. Coding phản ánh khả năng giải quyết vấn đề thực tế và hệ thống lớn. Phỏng vấn là để xem bạn nghĩ và giao tiếp kỹ thuật như thế nào. AI viết code được, nhưng không thay bạn suy nghĩ và chịu trách nhiệm cho giải pháp. 👉 Coding interview = kiểm tra tư duy, không phải kiểm tra gõ code"
    },
    {
      question: "Ai không nên tham gia?",
      answer: "Các bạn đã nắm vững kiến thức về cấu trúc dữ liệu và thuật toán, hoặc đang tìm kiếm chương trình nâng cao hơn."
    },
    {
      question: "Tôi cần chuẩn bị gì trước khi tham gia?",
      answer: "Bạn nên có kiến thức cơ bản về lập trình (biết ít nhất 1 ngôn ngữ như Python, Java, C++). Có laptop và kết nối internet ổn định. Quan trọng nhất là có động lực và quyết tâm học tập trong 3 tháng."
    },
    {
      question: "Chương trình có phù hợp với người mới bắt đầu không?",
      answer: "Có! Lộ trình được thiết kế từ cơ bản đến nâng cao. Tuy nhiên, bạn nên có kiến thức lập trình cơ bản trước khi tham gia để có thể theo kịp tiến độ."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq section" id="faq">
      <h2 className="section-title">Câu hỏi thường gặp</h2>
      <p className="section-subtitle">
        Mọi thông tin bạn cần biết trước khi bắt đầu
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
