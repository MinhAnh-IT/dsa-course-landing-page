import React from 'react'

function Video() {
  return (
    <section className="section video-section" id="video">
      <h2 className="section-title">Giới thiệu chương trình</h2>
      <p className="section-subtitle">
        Xem để hiểu hơn về mentor và cách học của khoá học DSA
      </p>
      
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ovNIpx_I8lE"
          title="TICUNGBIM DSA Program"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default Video
