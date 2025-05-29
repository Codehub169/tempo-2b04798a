import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const bounceFade = keyframes`
  0%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateY(8px);
  }
`;

export const ScrollIndicatorWrapper = styled(motion.button)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacings.large};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacings.small};
  z-index: 10; // Ensure it's above other content if necessary
  color: ${({ theme }) => theme.colors.textSecondary}; // Default color for text elements inside

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: ${({ theme }) => theme.spacings.medium};
  }

  // Hide on very short screens where scrolling might not be significant
  @media (max-height: 500px) {
    display: none; 
  }
`;

export const ScrollText = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: inherit; // Inherits color from ScrollIndicatorWrapper, or can be set explicitly
  margin-bottom: ${({ theme }) => theme.spacings.xsmall};
  letter-spacing: 0.5px;
`;

export const ChevronWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4px; 
  
  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-width: 2;
    animation: ${bounceFade} 2s infinite;
    fill: none; // Ensure SVGs are not filled if they are path/line based
    stroke-linecap: round; // Best practice for line-drawn SVGs
    stroke-linejoin: round; // Best practice for line-drawn SVGs
  }

  /* Apply animation delay to subsequent chevrons if multiple are used */
  svg:nth-child(2) {
    animation-delay: 0.2s;
    margin-top: -8px; // Creates an overlapping effect for multiple chevrons
  }
  svg:nth-child(3) {
    animation-delay: 0.4s;
    margin-top: -8px;
  }
`;
