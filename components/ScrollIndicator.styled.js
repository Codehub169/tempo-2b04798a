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

export const ScrollIndicatorWrapper = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  z-index: 10;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const ScrollText = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  letter-spacing: 0.5px;
`;

export const ChevronWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-width: 2;
    animation: ${bounceFade} 2s infinite;
  }

  /* Apply animation delay to subsequent chevrons if multiple are used */
  svg:nth-child(2) {
    animation-delay: 0.2s;
  }
  svg:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
