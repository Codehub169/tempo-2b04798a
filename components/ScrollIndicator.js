import React from 'react';
import { motion } from 'framer-motion';
import {
  ScrollIndicatorWrapper,
  ScrollText,
  ChevronWrapper
} from './ScrollIndicator.styled';

const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    // Assumes an element with id="story" exists on the page, typically the next main section.
    const storySection = document.getElementById('story'); 
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const wrapperVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 2, duration: 0.8, ease: 'easeInOut' },
    },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 2.2, duration: 0.5 } },
  };

  // Chevron animation is primarily handled by CSS keyframes in ScrollIndicator.styled.js

  return (
    <ScrollIndicatorWrapper
      onClick={scrollToNextSection}
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      title="Scroll down to learn more"
      aria-label="Scroll to next section"
      as="button" // Ensures it's treated as a button for accessibility
    >
      <ScrollText 
        variants={textVariants} // Apply variants for consistency
        // initial, animate, transition props are directly passed to motion component if not using variants
      >
        Scroll
      </ScrollText>
      <ChevronWrapper>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" // Will be overridden by styled-component if set there
          strokeWidth="2" // Often set in styled-component, but good default
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true" // Decorative SVG
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        {/* 
          Optional: Add a second or third chevron for a more pronounced animation. 
          Their animation delays are handled by nth-child selectors in ScrollIndicator.styled.js 
        */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg> */}
      </ChevronWrapper>
    </ScrollIndicatorWrapper>
  );
};

export default ScrollIndicator;
