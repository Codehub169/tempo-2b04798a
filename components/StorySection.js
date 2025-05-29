import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StoryWrapper = styled.section`
  padding: 6rem 2rem;
  background-color: ${props => props.theme.colors.softGrey}; // A slightly different background for visual separation
  text-align: center;
  overflow: hidden; // Important for containing animated elements

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 4rem 1rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const StoryText = styled(motion.p)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: clamp(1rem, 2.2vw, 1.3rem);
  color: ${props => props.theme.colors.text};
  line-height: 1.8;
  margin-bottom: 2.5rem;
  white-space: pre-line; // To respect newlines in the text string

  strong {
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }
`;

const WhoKnewContainer = styled.div`
  margin-top: 4rem;
  position: relative;
  min-height: 150px; // Ensure space for the animation
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WhoKnewText = styled(motion.div)`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.borderRadius};
  /* Optional: Add a subtle background or border to make it pop */
  /* background: ${props => props.theme.colors.accent}1A; */
  /* border: 2px dashed ${props => props.theme.colors.accent}; */
  display: inline-block;
  position: relative;
  z-index: 1;
`;

const PlayfulShape = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: ${props => props.theme.colors.accent}33; // Accent with more transparency
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; // Organic blob shape
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const whoKnewVariants = {
  hidden: { scale: 0.5, opacity: 0, rotate: -10 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 120, damping: 10, delay: 0.3 },
  },
};

const shapeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [0, 1.2, 1], // Add a little bounce
    opacity: 1,
    transition: { duration: 0.8, ease: 'backInOut', delay: 0.1 },
  },
};

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const storyContent = `At <strong>hueneu</strong>, we believe in the quiet power of thoughtful design.\nOur name itself is a story: <strong>“Hue”</strong> represents the vibrant bursts of creativity, the color, the lifeblood of every unique narrative. <strong>“Neu”</strong> signifies the grounding neutrality, the calm, intentional space where ideas take root and flourish.\nIt's this delicate balance – the bold with the serene, the vivid with the subtle – that defines our approach. We craft designs that don't just shout, but speak in compelling whispers, leaving a lasting impression.`;

  return (
    <StoryWrapper id="story">
      <ContentContainer>
        <SectionTitle>The hueneu Story</SectionTitle>
        <StoryText
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {storyContent}
        </StoryText>

        <WhoKnewContainer ref={ref}>
          {isInView && (
            <>
              <PlayfulShape variants={shapeVariants} initial="hidden" animate="visible" />
              <WhoKnewText variants={whoKnewVariants} initial="hidden" animate="visible">
                Who Knew?
              </WhoKnewText>
            </>
          )}
        </WhoKnewContainer>
      </ContentContainer>
    </StoryWrapper>
  );
};

export default StorySection;
