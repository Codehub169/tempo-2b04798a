import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';
import {
  HeroContainer as HeroWrapper, // Renamed HeroContainer to HeroWrapper for consistency if needed, or use HeroContainer
  ContentWrapper as ContentContainer,
  AnimatedLogoPlaceholder,
  Tagline,
  Subtext
} from './HeroSection.styled';
// import AnimatedLogo from './AnimatedLogo'; // Assuming AnimatedLogo is in a separate file

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
        <AnimatedLogoPlaceholder variants={itemVariants}>
          {/* Placeholder for actual AnimatedLogo, styled with a pulse in HeroSection.styled.js if kept there or AnimatedLogo.js */}
          {/* For now, text placeholder, actual logo would be <AnimatedLogo /> */}
          hueneu
        </AnimatedLogoPlaceholder>
        
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
