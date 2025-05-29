import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StorySectionWrapper = styled(motion.section)`
  padding: ${({ theme }) => theme.spacings.xlarge} ${({ theme }) => theme.spacings.large};
  background-color: ${({ theme }) => theme.colors.lightNeutral}; 
  text-align: center;
  overflow: hidden; // Contains the playful shape
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacings.large} ${({ theme }) => theme.spacings.medium};
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.large};
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: calc(${({ theme }) => theme.fontSizes.xlarge} * 0.85);
    margin-bottom: ${({ theme }) => theme.spacings.medium};
  }
`;

export const StoryText = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  max-width: 800px; // Matches the motion.div wrapper in StorySection.js
  margin: 0 auto ${({ theme }) => theme.spacings.xlarge} auto;
  // white-space: pre-line; // Not strictly needed when using dangerouslySetInnerHTML with <br /> tags, but harmless.

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: ${({ theme }) => theme.spacings.large};
  }
`;

export const WhoKnewMoment = styled(motion.div)`
  position: relative;
  display: inline-block; /* To wrap content and allow centering via text-align:center on parent */
  padding: ${({ theme }) => theme.spacings.large};
  margin-top: ${({ theme }) => theme.spacings.medium};
  z-index: 1;
  min-height: 150px; 
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacings.medium};
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
  opacity: 0; // Initial opacity, framer-motion will animate
  transform: translate(-50%, -50%);

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
  display: block; 
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative; 
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: calc(${({ theme }) => theme.fontSizes.xlarge} * 0.8);
  }
`;
