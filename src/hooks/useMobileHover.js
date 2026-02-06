import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook for handling mobile-friendly hover interactions
 * Provides transient hover state that auto-clears on scroll or outside tap
 * 
 * @returns {Object} { hoveredId, setHoveredId, handleItemInteraction, containerRef, isMobile }
 */
export function useMobileHover() {
  const [hoveredId, setHoveredId] = useState(null)
  const containerRef = useRef(null)
  const isMobile = useRef(false)

  // Detect if device is mobile (touch-only)
  useEffect(() => {
    const checkMobile = () => {
      // Check if device has coarse pointer (touch) and no hover capability
      isMobile.current = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Clear hover state on scroll or outside tap (mobile only)
  useEffect(() => {
    if (!isMobile.current) return

    const handleScroll = () => {
      setHoveredId(null)
    }

    const handleTouchStart = (e) => {
      // If touch is outside the container, clear hover
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setHoveredId(null)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('touchstart', handleTouchStart, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('touchstart', handleTouchStart)
    }
  }, [])

  /**
   * Handle item interaction (click/tap)
   * On desktop: does nothing (CSS :hover handles it)
   * On mobile: toggles hover state
   */
  const handleItemInteraction = (itemId) => {
    if (!isMobile.current) return // Desktop uses CSS :hover only

    // On mobile: tap toggles the hover state (or clears if tapping the same one)
    setHoveredId(prev => prev === itemId ? null : itemId)
  }

  return {
    hoveredId,
    setHoveredId,
    handleItemInteraction,
    containerRef,
    isMobile
  }
}
