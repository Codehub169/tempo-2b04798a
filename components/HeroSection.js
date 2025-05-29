import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';
import {
  HeroContainer as HeroWrapper,
  ContentWrapper as ContentContainer,
  // AnimatedLogoPlaceholder, // Comment retained for context if needed, but actual component is used
  Tagline,
  Subtext
} from './HeroSection.styled';
import AnimatedLogo from './AnimatedLogo'; // Using the actual AnimatedLogo component

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 }, // delayChildren can be adjusted based on logo animation
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
        {/* AnimatedLogo is wrapped in motion.div for itemVariants application */}
        <motion.div variants={itemVariants}> 
          <AnimatedLogo />
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
