import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  colors: {
    primary: '#4A4A68',       // Deep Lavender Grey
    secondary: '#D3CFCF',     // Soft Grey
    accent: '#FF6B6B',        // Vibrant Coral
    background: '#FBFBFB',   // Very light grey, almost white for main background
    text: '#333333',          // Dark Grey for text
    textLight: '#5A5A5A',     // Lighter grey for subtext
    white: '#FFFFFF',
    lightNeutral: '#F5F5F5', // Off-White for elements like cards or section backgrounds
    success: '#8FBC8F',       // Soft Green
    warning: '#DAA520',       // Goldenrod
    error: '#CD5C5C',         // Indian Red
  },
  fonts: {
    primary: '"Inter", sans-serif',
    secondary: '"Poppins", sans-serif',
  },
  fontSizes: {
    small: '0.875rem', // 14px
    regular: '1rem',   // 16px
    medium: '1.125rem', // 18px
    large: '1.5rem',   // 24px
    xlarge: '2rem',   // 32px
    xxlarge: '2.8rem', // 44.8px (for HeroSection title or similar)
  },
  spacings: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px',
    sectionPadding: '80px',
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  borderRadius: '8px',
  headerHeight: '80px', // Example, if needed for layout calculations
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
