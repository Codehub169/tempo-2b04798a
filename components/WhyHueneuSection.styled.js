import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WhyHueneuSectionContainer = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.sectionPadding} ${({ theme }) => theme.spacing.horizontalPadding};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  overflow: hidden; // Prevents scrollbars during animations
  min-height: 70vh; // Ensure it takes up a good portion of the screen
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sectionPaddingMobile} ${({ theme }) => theme.spacing.horizontalPaddingMobile};
    min-height: 60vh;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  position: relative;
  display: inline-block;

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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.h2Mobile};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;

export const PoeticTextContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

export const PoeticText = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  
  strong {
    font-weight: 600; // Poppins regular is 400, semi-bold is 600
    color: ${({ theme }) => theme.colors.primary};
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: 1.7;
  }
`;

export const HighlightBar = styled(motion.div)`
  width: 100px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.accent};
  margin: ${({ theme }) => theme.spacing.large} auto 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

// Animation variants for the container to orchestrate children animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
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
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
    }
  }
};
