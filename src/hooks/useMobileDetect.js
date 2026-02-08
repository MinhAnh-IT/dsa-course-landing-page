import { useState, useEffect } from 'react';

/**
 * Custom hook to detect mobile devices and screen size
 * Usage: const { isMobile, isTablet, screenWidth } = useMobileDetect();
 */
export const useMobileDetect = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 1024,
    screenHeight: typeof window !== 'undefined' ? window.innerHeight : 768,
    orientation: 'landscape',
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setDeviceInfo({
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1024,
        isDesktop: width > 1024,
        screenWidth: width,
        screenHeight: height,
        orientation: width > height ? 'landscape' : 'portrait',
      });
    };

    // Initial call
    handleResize();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return deviceInfo;
};

/**
 * Check if device is iOS
 */
export const isIOS = () => {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

/**
 * Check if device is Android
 */
export const isAndroid = () => {
  if (typeof window === 'undefined') return false;
  return /Android/.test(navigator.userAgent);
};

/**
 * Check if device is touch-enabled
 */
export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Get safe area insets (for devices with notch)
 */
export const getSafeAreaInsets = () => {
  if (typeof window === 'undefined') return { top: 0, bottom: 0, left: 0, right: 0 };
  
  const style = getComputedStyle(document.documentElement);
  return {
    top: parseInt(style.getPropertyValue('env(safe-area-inset-top)')) || 0,
    bottom: parseInt(style.getPropertyValue('env(safe-area-inset-bottom)')) || 0,
    left: parseInt(style.getPropertyValue('env(safe-area-inset-left)')) || 0,
    right: parseInt(style.getPropertyValue('env(safe-area-inset-right)')) || 0,
  };
};

/**
 * Prevent zoom on iOS when focusing inputs
 */
export const preventIOSZoom = () => {
  if (!isIOS()) return;
  
  const meta = document.querySelector('meta[name="viewport"]');
  if (meta) {
    const content = meta.getAttribute('content');
    meta.setAttribute('content', content + ', maximum-scale=1.0');
  }
};

/**
 * Get device type string
 */
export const getDeviceType = () => {
  const width = window.innerWidth;
  if (width <= 360) return 'very-small-mobile';
  if (width <= 480) return 'small-mobile';
  if (width <= 768) return 'mobile';
  if (width <= 1024) return 'tablet';
  return 'desktop';
};

/**
 * Check if viewport is in landscape mode
 */
export const isLandscape = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth > window.innerHeight;
};

/**
 * Utility to add mobile-specific class to body
 */
export const addMobileClass = () => {
  if (typeof document === 'undefined') return;
  
  const deviceType = getDeviceType();
  document.body.classList.add(deviceType);
  
  if (isTouchDevice()) {
    document.body.classList.add('touch-device');
  }
  
  if (isIOS()) {
    document.body.classList.add('ios');
  } else if (isAndroid()) {
    document.body.classList.add('android');
  }
};

export default useMobileDetect;
