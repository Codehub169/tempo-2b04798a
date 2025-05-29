import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const LogoWrapper = styled(motion.div)`
  display: inline-flex; /* Changed from block to inline-flex for better centering if needed */
  align-items: center;
  justify-content: center;
  position: relative; /* For potential pseudo-elements or complex animations */
  cursor: default; /* Or 'pointer' if the logo is interactive */
  width: clamp(150px, 25vw, 250px); /* Responsive width */
  height: auto; /* Maintain aspect ratio */

  svg {
    width: 100%;
    height: auto;
    /* Base styles for SVG paths/elements if needed, e.g., fill, stroke */
    /* path, circle, rect {
      fill: ${({ theme }) => theme.colors.primary};
      transition: fill 0.3s ease;
    } */
  }
`;

// Example of a more complex animation for SVG parts if the logo SVG is structured for it
// This is a placeholder; actual animation depends on SVG structure and desired effect
export const SvgPathElement = styled(motion.path)`
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-width: 2;
  fill: transparent;
`;

export const LogoTextPath = styled(motion.path)`
  fill: ${({ theme }) => theme.colors.primary};
  opacity: 0;
`;

// Keyframes for subtle effects if not using framer-motion for everything
export const subtlePulse = keyframes`
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.02); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
`;

export const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%; /* Slightly larger than the logo */
  height: 120%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.accent}33 0%,
    ${({ theme }) => theme.colors.accent}00 70%
  );
  opacity: 0;
  border-radius: 50%;
  pointer-events: none; /* So it doesn't interfere with logo interaction */
  z-index: -1; /* Behind the logo */
`;

/* 
  The actual animation logic (e.g., drawSVG, revealing text) would primarily be handled 
  within AnimatedLogo.js using framer-motion's variants and transition props. 
  These styled components provide the base styling and structure for those animations.
  For example, if the logo is an SVG with specific IDs or classes for its parts:

  #hueneu-H, #hueneu-U, #hueneu-E, #hueneu-N, #hueneu-E2, #hueneu-U2 {
    // initial styles for animation
  }
*/
