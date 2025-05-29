import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesWrapper = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: calc(${({ theme }) => theme.fontSizes.xlarge} * 0.85);
  }
`;

export const SectionSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: calc(${({ theme }) => theme.fontSizes.medium} * 0.95);
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const ServiceCardStyled = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  text-align: left;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  cursor: default; // Not interactive, but hover effect implies it

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const ServiceIconPlaceholder = styled(motion.div)`
  font-size: 2.5rem; // Placeholder size, actual icon will dictate
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  height: 40px; // To maintain consistent layout before icon loads
  display: flex;
  align-items: center;
`;

export const ServiceName = styled(motion.h3)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 500;
`;

export const ServiceDescription = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
`;
