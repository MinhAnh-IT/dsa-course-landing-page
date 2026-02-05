import React, { useState } from 'react'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "DSA đã giúp Tí đậu vào những công ty hàng đầu về công nghệ, Tí mong các bạn cũng có thể học và làm hơn những gì Tí đã làm.",
      author: "Tí đẹp trai",
      role: "SOFTWARE ENGINEER AT MICROSOFT",
      image: "https://framerusercontent.com/images/z9LQMXzVEmlLFtbMe13Inp0GpE.jpeg?width=300",
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="section-title">TESTIMONIALS</h2>
      
      <div className="carousel-container">
        {testimonials.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prevTestimonial}>
              ‹
            </button>
            <button className="carousel-btn next" onClick={nextTestimonial}>
              ›
            </button>
          </>
        )}
        
        <div className="testimonial-card">
          <div className="verified-badge">✓ Verified Student</div>
          <img 
            src={testimonials[currentIndex].image} 
            alt={testimonials[currentIndex].author}
            className="testimonial-image"
          />
          <div className="rating-stars">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <span key={i} className="star">⭐</span>
            ))}
          </div>
          <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
          <div className="testimonial-author">{testimonials[currentIndex].author}</div>
          <div className="testimonial-role">{testimonials[currentIndex].role}</div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
