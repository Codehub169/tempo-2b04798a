import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
    min-height: 90vh; // Adjust for smaller screens if logo/text needs more space
  }
`;

export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 800px;
  width: 100%;
`;

export const AnimatedLogoPlaceholder = styled(motion.div)`
  width: 150px;
  height: 150px;
  /* Placeholder for AnimatedLogo.js styles */
  /* Real logo SVG styling will be in AnimatedLogo.styled.js */
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 120px;
    height: 120px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const Tagline = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: calc(${({ theme }) => theme.fontSizes.xlarge} * 0.85);
  }

   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: calc(${({ theme }) => theme.fontSizes.large} * 1.1);
  }
`;

export const Subtext = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 600px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: calc(${({ theme }) => theme.fontSizes.medium} * 0.95);
  }
`;
