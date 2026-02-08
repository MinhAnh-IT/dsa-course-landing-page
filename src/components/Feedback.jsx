import React from 'react'

const testimonials = [
  {
    name: "Amog Chandrashekar",
    company: "Google",
    companyLogo: "https://img.icons8.com/color/48/google-logo.png",
    image: "/Google offter.png",
    text: "I signed my offer with",
    highlight: "Google",
    details: "as a software engineer (L4) and you have a fair share of contribution in it."
  },
  {
    name: "Rodrigo Ramirez",
    company: "Microsoft",
    companyLogo: "https://img.icons8.com/color/48/microsoft.png",
    image: "/Microsoft.png",
    text: "I recently got an offer for",
    highlight: "Microsoft,",
    details: "and I will be starting next year! Thank you so much for your videos!"
  },
  {
    name: "Aiswarya Sukumar",
    company: "Amazon",
    companyLogo: "https://img.icons8.com/color/48/amazon.png",
    image: "/Amazon offer.png",
    text: "Got an offer from Amazon today.",
    details: "Thanks a lot for your videos. It really helped me during the preparation."
  },
  {
    name: "Minh Nguyen",
    company: "Amazon",
    companyLogo: "https://img.icons8.com/color/48/amazon.png",
    image: "/Amazon_Minh.png",
    text: "Successfully landed my dream role at",
    highlight: "Amazon",
    details: "thanks to the comprehensive DSA preparation!"
  },
  {
    name: "Janvi Kalra",
    company: "Uber",
    companyLogo: "https://img.icons8.com/color/48/uber.png",
    image: "/Uber.png",
    text: "Thanks to your comprehensive DSA course,",
    details: "I was able to ace my technical interviews and land my dream job!"
  },
  {
    name: "Thariq Shihipar",
    company: "IBM",
    companyLogo: "https://img.icons8.com/color/48/ibm.png",
    image: "/Ibm.png",
    text: "The mock interviews were incredibly helpful.",
    details: "They prepared me for the real thing and boosted my confidence significantly!"
  }
]

const companyLogos = [
  { name: "Google", icon: "https://img.icons8.com/color/48/google-logo.png" },
  { name: "Amazon", icon: "https://img.icons8.com/color/48/amazon.png" },
  { name: "Microsoft", icon: "https://img.icons8.com/color/48/microsoft.png" },
  { name: "Uber", icon: "https://img.icons8.com/ios-filled/50/ffffff/uber.png" },
  { name: "IBM", icon: "https://img.icons8.com/color/48/ibm.png" }
]

function Feedback() {
  return (
    <section className="feedback section" id="feedback">
      <h2 className="section-title">Được tin tưởng bởi các kỹ sư nhận được offer từ các công ty hàng đầu</h2>
      
      {/* Company Logos */}
      <div className="company-logos">
        {companyLogos.map((company, index) => (
          <div key={index} className="company-logo">
            <img src={company.icon} alt={company.name} />
          </div>
        ))}
      </div>
      
      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="testimonial-image"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Feedback
