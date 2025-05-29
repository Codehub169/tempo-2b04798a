import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StorySectionWrapper = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.lightGrey}; /* Slightly different background */
  text-align: center;
  overflow: hidden; // Contains the playful shape
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: calc(${({ theme }) => theme.fontSizes.xlarge} * 0.85);
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const StoryText = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const WhoKnewMoment = styled(motion.div)`
  position: relative;
  display: inline-block; /* To wrap content */
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.md};
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const PlayfulShape = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px; 
  height: 150px;
  background-color: ${({ theme }) => theme.colors.accent}33; /* Accent with transparency */
  border-radius: 60% 40% 30% 70% / 70% 30% 70% 40%; /* Organic shape */
  z-index: -1;
  opacity: 0;
  // Animation properties (scale, rotate, opacity) will be controlled by Framer Motion in the component

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 200px;
    height: 120px;
  }
`;

export const WhoKnewText = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;
  display: block; // Ensures it's on its own line if needed

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: calc(${({ theme }) => theme.fontSizes.xlarge} * 0.8);
  }
`;
