import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesWrapper = styled(motion.section)`
  padding: ${({ theme }) => theme.spacings.xlarge} ${({ theme }) => theme.spacings.large};
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  overflow: hidden; // Good practice for sections with animations that might peek out

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacings.large} ${({ theme }) => theme.spacings.medium};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacings.large} ${({ theme }) => theme.spacings.small};
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.small};
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: calc(${({ theme }) => theme.fontSizes.xlarge} * 0.85);
  }
`;

export const SectionSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacings.large};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: calc(${({ theme }) => theme.fontSizes.medium} * 0.95);
    margin-bottom: ${({ theme }) => theme.spacings.medium};
  }
`;

export const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacings.large};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr; // Stack cards on smaller screens
    gap: ${({ theme }) => theme.spacings.medium};
  }
`;

export const ServiceCardStyled = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  text-align: left;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  cursor: default; // Indicates cards are not interactive (clickable)

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${({ theme }) => `${theme.colors.primary}12`}; // primary color with low opacity (e.g., 0.07)
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacings.medium};
  }
`;

export const ServiceIconPlaceholder = styled(motion.div)`
  font-size: 2.5rem; 
  font-family: ${({ theme }) => theme.fonts.secondary}; // Consistent font for icon text
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  height: 50px; // Standardized height 
  width: 50px;  // Standardized width
  border-radius: 50%; // Circular background
  background-color: ${({ theme }) => `${theme.colors.accent}20`}; // Accent color with low opacity (e.g., 0.125)
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

export const ServiceName = styled(motion.h3)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.small};
  font-weight: 500; 
`;

export const ServiceDescription = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  font-style: italic;
`;
