import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  colors: {
    primary: '#4A4A68',       // Deep Lavender Grey
    secondary: '#D3CFCF',     // Soft Grey
    accent: '#FF6B6B',        // Vibrant Coral
    accentHover: '#E05252',   // Darker Coral for hover
    background: '#FBFBFB',   // Very light grey, almost white for main background
    text: '#333333',          // Dark Grey for text
    textLight: '#5A5A5A',     // Lighter grey for subtext
    textSecondary: '#5A5A5A', // Added for consistency, using textLight value
    textPlaceholder: '#AAAAAA',// Added for form placeholders
    white: '#FFFFFF',
    lightNeutral: '#F5F5F5', // Off-White for elements like cards or section backgrounds
    border: '#d3cfcf',        // Added for input borders, using Soft Grey value
    success: '#8FBC8F',       // Soft Green
    successDark: '#2E7D32',   // Added for success message text
    warning: '#DAA520',       // Goldenrod
    error: '#CD5C5C',         // Indian Red
    errorDark: '#B71C1C',     // Added for error message text
  },
  fonts: {
    primary: '"Inter", sans-serif',
    secondary: '"Poppins", sans-serif',
  },
  fontSizes: {
    small: '0.875rem',    // 14px
    regular: '1rem',      // 16px
    medium: '1.125rem',   // 18px
    large: '1.5rem',      // 24px
    xlarge: '2rem',      // 32px
    xxlarge: '2.8rem',    // 44.8px 
    h1: '2.8rem',         // Mapped from xxlarge for GlobalStyles
    h2: '2rem',           // Mapped from xlarge for GlobalStyles
    h3: '1.5rem',         // Mapped from large for GlobalStyles
    h4: '1.125rem',       // Mapped from medium for GlobalStyles
  },
  spacings: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px',
    sectionPadding: '80px',
    // Added for WhyHueneuSection, can be adjusted
    sectionPaddingMobile: '48px', // e.g. xxlarge
    horizontalPadding: '32px',    // e.g. xlarge
    horizontalPaddingMobile: '24px' // e.g. large
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',    // Used as 'tablet'
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
