import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Keyframes for the scroll animation
const bounce = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const ScrollIndicatorWrapper = styled(motion.div)`
  position: absolute;
  bottom: 3rem; // Adjust as needed
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10; // Ensure it's above other hero elements if necessary

  // Hide on very small screens if it feels too cluttered, or adjust size
  @media (max-height: 500px) {
    display: none; 
  }
`;

const Chevron = styled(motion.svg)`
  width: 24px;
  height: 24px;
  stroke: ${props => props.theme.colors.primary};
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin-top: -8px; // Overlap chevrons slightly for a smoother look
`;

const ScrollText = styled(motion.span)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.75rem;
  color: ${props => props.theme.colors.textSlightlyMuted};
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;

const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    // This assumes the next section has an id. 
    // For a one-page scroll, you might use window.scrollBy or a smooth scroll library.
    const firstSection = document.getElementById('story'); // Assuming 'story' is the ID of the next section
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
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

  const chevronVariants = {
    animate: (i) => ({
      opacity: [0, 1, 0],
      y: [0, 5, 10],
      transition: {
        delay: 2.5 + i * 0.2, // Stagger the animation of chevrons
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <ScrollIndicatorWrapper
      onClick={scrollToNextSection}
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      title="Scroll down"
    >
      <ScrollText 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 2.2, duration: 0.5}}
      >
        Scroll
      </ScrollText>
      <motion.div style={{ animation: `${bounce} 2s infinite`, marginTop: '4px' }}>
        <Chevron xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" variants={chevronVariants} custom={0} animate="animate">
          <polyline points="6 9 12 15 18 9"></polyline>
        </Chevron>
      </motion.div>
      {/* A second chevron for a more pronounced effect, slightly delayed */}
      {/* <Chevron xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" variants={chevronVariants} custom={1} animate="animate">
        <polyline points="6 9 12 15 18 9"></polyline>
      </Chevron> */}
    </ScrollIndicatorWrapper>
  );
};

export default ScrollIndicator;
