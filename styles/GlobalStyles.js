import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Modern CSS Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px; /* Base font size */
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1.3;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  h1 { font-size: ${({ theme }) => theme.fontSizes.h1}; }
  h2 { font-size: ${({ theme }) => theme.fontSizes.h2}; }
  h3 { font-size: ${({ theme }) => theme.fontSizes.h3}; }
  h4 { font-size: ${({ theme }) => theme.fontSizes.h4}; }
  /* Add more if needed, or use clamp for responsive headings */

  p {
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.textSecondary || theme.colors.text};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.accentHover || theme.colors.primary}; 
      /* Assuming accentHover is defined in theme, otherwise fallback to primary */
      text-decoration: underline;
      text-decoration-thickness: 1.5px;
      text-underline-offset: 3px;
    }
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.primary};
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    color: inherit;
  }

  ul, ol {
    list-style: none;
    padding-left: 0; /* Remove default padding */
  }

  /* Custom Selection Styles */
  ::selection {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white || '#FFFFFF'}; 
  }

  /* Accessibility: Focus Visible */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius || '4px'};
  }

  /* Remove default focus outline for non-keyboard interactions if needed, but carefully */
  /* *:focus:not(:focus-visible) {
    outline: none;
  } */

  /* Custom Scrollbar (Optional - Webkit only) */
  /*
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundLight || '#f1f1f1'}; 
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
  */
`;

export default GlobalStyles;
