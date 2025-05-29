import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSectionWrapper = styled(motion.section)`
  padding: 6rem clamp(2rem, 10vw, 8rem) 8rem;
  background-color: ${({ theme }) => theme.colors.secondary}; /* Soft Grey, like fine paper */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden; /* For any decorative elements */

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem clamp(1.5rem, 5vw, 3rem) 5rem;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: clamp(2.2rem, 4.5vw, 3.2rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: ${({ theme }) => theme.colors.textSecondary || theme.colors.text};
  margin-bottom: 3rem;
  max-width: 600px;
`;

export const FormStyled = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px; /* Max width for the form */
  gap: 1.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: clamp(2rem, 5vw, 3.5rem);
  border-radius: ${({ theme }) => theme.borderRadius || '8px'};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  border: 1px solid ${({ theme }) => theme.colors.backgroundLight || '#e0e0e0'};
  text-align: left;
`;

const inputStyles = css`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  padding: 0.9rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.border || '#d3cfcf'}; /* Soft Grey or specific border color */
  border-radius: ${({ theme }) => theme.borderRadius || '6px'};
  background-color: ${({ theme }) => theme.colors.backgroundLight || '#f9f9f9'};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textPlaceholder || '#aaa'};
    opacity: 1; /* Firefox */
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33; /* Subtle focus ring */
  }

  /* Styling for validation states */
  &.invalid {
    border-color: ${({ theme }) => theme.colors.error || '#CD5C5C'};
    &:focus {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.error}33;
    }
  }
`;

export const InputStyled = styled.input`
  ${inputStyles}
`;

export const TextareaStyled = styled.textarea`
  ${inputStyles}
  min-height: 150px;
  resize: vertical;
`;

export const LabelStyled = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: -1rem; /* Pull up slightly above the input */
  display: block;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonStyled = styled(motion.button)`
  font-family: ${({ theme }) => theme.fonts.secondary}; /* Poppins for a bit more personality */
  font-size: clamp(1rem, 1.6vw, 1.1rem);
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.accent};
  padding: 0.9rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius || '6px'};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  align-self: center; /* Center button if form is wider */
  margin-top: 1rem;
  box-shadow: 0 4px 15px ${({ theme }) => theme.colors.accent}4D;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accentHover || theme.colors.primary}; 
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.colors.accent}66;
  }

  &:active:not(:disabled) {
    transform: translateY(0px);
    box-shadow: 0 3px 10px ${({ theme }) => theme.colors.accent}33;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SocialLinkWrapper = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const SocialLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease, transform 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
    transition: fill 0.3s ease;
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    text-decoration: none; /* Override global if needed */
    svg {
      fill: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const FormStatusMessage = styled(motion.p)`
  font-size: 0.95rem;
  padding: 0.8rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius || '6px'};
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;

  &.success {
    background-color: ${({ theme }) => theme.colors.success}26; /* Light green background */
    color: ${({ theme }) => theme.colors.successDark || '#2E7D32'}; /* Darker green text */
    border: 1px solid ${({ theme }) => theme.colors.success || '#8FBC8F'};
  }

  &.error {
    background-color: ${({ theme }) => theme.colors.error}26; /* Light red background */
    color: ${({ theme }) => theme.colors.errorDark || '#B71C1C'}; /* Darker red text */
    border: 1px solid ${({ theme }) => theme.colors.error || '#CD5C5C'};
  }
`;
