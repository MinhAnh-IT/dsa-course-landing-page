import React from 'react'
import { useMobileHover } from '../hooks/useMobileHover'

function WhatYouGet() {
  const { hoveredId, handleItemInteraction, containerRef } = useMobileHover()
  
  return (
    <section className="section what-you-get" id="what-you-get">
      <div className="what-you-get-container">
        <div className="what-you-get-icon">
          <svg viewBox="0 0 100 100" className="target-icon">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
            <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
            <circle cx="50" cy="50" r="19" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.7"/>
            <circle cx="50" cy="50" r="6" fill="currentColor"/>
          </svg>
        </div>
        
        <h2 className="what-you-get-title">Bạn sẽ nhận được gì sau chương trình?</h2>
        
        <div className="what-you-get-content" ref={containerRef}>
          <div 
            className={`outcome-item ${hoveredId === 1 ? 'hovered' : ''}`}
            onClick={() => handleItemInteraction(1)}
          >
            <div className="outcome-number">01</div>
            <div className="outcome-text">
              <h3>Tư duy giải quyết vấn đề có cấu trúc</h3>
              <p>Sau chương trình, bạn hình thành được tư duy giải quyết vấn đề có cấu trúc, biết cách phân tích và đưa ra giải pháp tối ưu.</p>
            </div>
          </div>

          <div 
            className={`outcome-item ${hoveredId === 2 ? 'hovered' : ''}`}
            onClick={() => handleItemInteraction(2)}
          >
            <div className="outcome-number">02</div>
            <div className="outcome-text">
              <h3>Tự tin trong phỏng vấn kỹ thuật</h3>
              <p>Tự tin trao đổi với interviewer về hướng tiếp cận, trade-off và độ phức tạp của giải pháp một cách chuyên nghiệp.</p>
            </div>
          </div>

          <div 
            className={`outcome-item ${hoveredId === 3 ? 'hovered' : ''}`}
            onClick={() => handleItemInteraction(3)}
          >
            <div className="outcome-number">03</div>
            <div className="outcome-text">
              <h3>Kỹ năng phân tích và tối ưu hóa</h3>
              <p>Nắm vững cách đánh giá độ phức tạp thuật toán (Big O), biết khi nào nên dùng cấu trúc dữ liệu nào để tối ưu hiệu suất.</p>
            </div>
          </div>

          <div 
            className={`outcome-item ${hoveredId === 4 ? 'hovered' : ''}`}
            onClick={() => handleItemInteraction(4)}
          >
            <div className="outcome-number">04</div>
            <div className="outcome-text">
              <h3>Khả năng giải thích rõ ràng</h3>
              <p>Trình bày suy nghĩ và code một cách mạch lạc, dễ hiểu - kỹ năng quan trọng nhất trong coding interview.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatYouGet
