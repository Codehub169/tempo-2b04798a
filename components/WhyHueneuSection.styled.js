import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WhyHueneuSectionContainer = styled(motion.section)`
  padding: ${({ theme }) => theme.spacings.sectionPadding} ${({ theme }) => theme.spacings.horizontalPadding};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  overflow: hidden; 
  min-height: 70vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacings.sectionPaddingMobile} ${({ theme }) => theme.spacings.horizontalPaddingMobile};
    min-height: 60vh;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.large};
  position: relative;
  display: inline-block;
  line-height: 1.3;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    margin-bottom: ${({ theme }) => theme.spacings.medium};
  }
`;

export const PoeticTextContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  width: 100%; // Ensures it takes up available width within parent's centering
`;

export const PoeticText = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  max-width: 700px; // Max width for the text itself
  margin-left: auto; // Center the text block if PoeticTextContainer is wider
  margin-right: auto; // Center the text block
  // white-space: pre-line; // Not strictly needed with dangerouslySetInnerHTML and <br />, but harmless
  
  strong {
    font-weight: 600; 
    color: ${({ theme }) => theme.colors.accent};
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 1.7;
  }
`;

export const HighlightBar = styled(motion.div)`
  width: 80px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.accent};
  margin: ${({ theme }) => theme.spacings.medium} auto ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

// Animation variants for the container to orchestrate children animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time between each child animation starts
      delayChildren: 0.2,   // Delay before the first child starts
    },
  },
};

// Animation variants for text elements (title, poetic text)
export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const barVariants = {
  hidden: { scaleX: 0, opacity: 0, originX: 0.5 }, // Added originX for centered scaling
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
    }
  }
};
