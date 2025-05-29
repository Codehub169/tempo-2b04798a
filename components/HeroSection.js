import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';
// import AnimatedLogo from './AnimatedLogo'; // Assuming AnimatedLogo is in a separate file

// Placeholder for AnimatedLogo until it's created
const PlaceholderAnimatedLogo = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  font-family: ${props => props.theme.fonts.secondary};
  margin-bottom: 2rem;
  // This is a simple placeholder. The actual AnimatedLogo will have its own animation.
  // For now, let's add a subtle pulse to make it feel a bit dynamic.
  animation: pulse 2s infinite ease-in-out;
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const HeroWrapper = styled.section`
  min-height: 100vh; // Full viewport height
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;

  // Optional: Add a subtle gradient or texture for depth
  /* background: linear-gradient(180deg, ${props => props.theme.colors.softGrey} 0%, ${props => props.theme.colors.background} 100%); */
`;

const ContentContainer = styled(motion.div)`
  max-width: 800px;
  z-index: 1;
`;

const Tagline = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: clamp(2.5rem, 6vw, 4.5rem); // Responsive font size
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtext = styled(motion.p)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: clamp(1rem, 2.5vw, 1.5rem); // Responsive font size
  color: ${props => props.theme.colors.textSlightlyMuted}; // A softer text color
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

const HeroSection = () => {
  return (
    <HeroWrapper id="hero">
      <ContentContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Replace PlaceholderAnimatedLogo with actual AnimatedLogo component when available */}
        <motion.div variants={itemVariants}>
          <PlaceholderAnimatedLogo>hueneu</PlaceholderAnimatedLogo>
        </motion.div>
        
        <Tagline variants={itemVariants}>
          Where stories find their aesthetic.
        </Tagline>
        <Subtext variants={itemVariants}>
          Designs that whisper loud stories.
        </Subtext>
      </ContentContainer>
      <ScrollIndicator />
    </HeroWrapper>
  );
};

export default HeroSection;
