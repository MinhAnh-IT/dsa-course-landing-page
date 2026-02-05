import React, { useState, useEffect, useRef } from 'react'

function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    students: 0,
    sessions: 0,
    problems: 0,
    months: 0
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      const targets = {
        students: 500,
        sessions: 24,
        problems: 150,
        months: 3
      }

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounts({
          students: Math.floor(targets.students * progress),
          sessions: Math.floor(targets.sessions * progress),
          problems: Math.floor(targets.problems * progress),
          months: Math.floor(targets.months * progress)
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounts(targets)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-icon">👥</div>
          <div className="stat-number">{counts.students}+</div>
          <div className="stat-label">Học viên đã tham gia</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon">📚</div>
          <div className="stat-number">{counts.sessions}+</div>
          <div className="stat-label">Buổi học online</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon">🎯</div>
          <div className="stat-number">{counts.problems}+</div>
          <div className="stat-label">Bài tập thực hành</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon">📅</div>
          <div className="stat-number">{counts.months}</div>
          <div className="stat-label">Tháng học tập</div>
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
