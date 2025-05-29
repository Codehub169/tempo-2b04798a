import React from 'react';
import {
  LogoWrapper,
  // SvgPathElement, // Example, if your SVG is structured for this - Removed as not used in current code or primary example
  LogoTextPath    // Example for text animation, used in commented out example
} from './AnimatedLogo.styled';
// import HueneuLogoSvg from '../public/images/hueneu-logo.svg'; // Removed: Unused import, SVG is loaded via public path in <img>

// Framer Motion variants for the logo animation
const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// Example variants for path drawing (if you had an SVG with paths to animate)
const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

const AnimatedLogo = () => {
  return (
    <LogoWrapper
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      aria-label="hueneu logo"
    >
      {/* Using the SVG as an image for simplicity. 
          For complex path animations, you'd inline the SVG content 
          and apply motion props to individual <path> or <text> elements. */}
      <img src="/images/hueneu-logo.svg" alt="hueneu logo" style={{ width: '100%', height: 'auto' }} />
      
      {/* 
        Alternative: Inlined SVG for complex animations.
        This requires your SVG to be structured with identifiable elements (e.g., IDs, classes)
        and then you would use motion components like <motion.path>, <motion.text>.

        <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hueneuAnimatedGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#4A4A68" />
              <stop offset="45%" stopColor="#4A4A68" />
              <stop offset="55%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>
          </defs>
          <LogoTextPath
            d="M10 42 H190" // This is a placeholder, you'd use actual text path or text element
            fontFamily='Poppins, sans-serif'
            fontSize='40'
            fontWeight='500'
            letterSpacing='-1px'
            fill="url(#hueneuAnimatedGradient)"
            variants={pathVariants} // Example for text reveal
          >
            hueneu
          </LogoTextPath>
        </svg>
      */}
    </LogoWrapper>
  );
};

export default AnimatedLogo;
