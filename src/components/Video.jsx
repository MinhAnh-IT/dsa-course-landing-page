import React, { useState } from 'react'

function Video() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  
  const handleLoadVideo = () => {
    setIsVideoLoaded(true)
  }
  
  return (
    <section className="section video-section" id="video">
      <h2 className="section-title">Hi, I'm Ti</h2>
      <p className="section-subtitle">
        Xem để hiểu hơn về mentor và chương trình học
      </p>
      
      <div className="video-container">
        {!isVideoLoaded ? (
          <div 
            className="video-thumbnail"
            onClick={handleLoadVideo}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              backgroundImage: 'url(https://img.youtube.com/vi/iDxI3bzLpYE/maxresdefault.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(255, 0, 0, 0.9)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s'
            }}>
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="white"
                style={{ marginLeft: '4px' }}
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/iDxI3bzLpYE?autoplay=1"
            title="TICUNGBIM DSA Program"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  )
}

export default Video
