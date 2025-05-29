import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  StorySectionWrapper as StoryWrapper,
  SectionTitle,
  StoryText,
  WhoKnewMoment as WhoKnewContainer,
  PlayfulShape,
  WhoKnewText as WhoKnewStyledText
} from './StorySection.styled';

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

  // Using Unicode for smart quotes for consistency, newlines will be replaced by <br />
  const storyContent = `At <strong>hueneu</strong>, we believe in the quiet power of thoughtful design.\nOur name itself is a story: <strong>“Hue”</strong> represents the vibrant bursts of creativity, the color, the lifeblood of every unique narrative. <strong>“Neu”</strong> signifies the grounding neutrality, the calm, intentional space where ideas take root and flourish.\nIt's this delicate balance – the bold with the serene, the vivid with the subtle – that defines our approach. We craft designs that don't just shout, but speak in compelling whispers, leaving a lasting impression.`;

  return (
    <StoryWrapper id="story">
      {/* This motion.div provides a max-width content area, similar to other sections. It's acceptable. */}
      <motion.div style={{ maxWidth: '800px', margin: '0 auto' }}> 
        <SectionTitle>The hueneu Story</SectionTitle>
        <StoryText
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          dangerouslySetInnerHTML={{ __html: storyContent.replace(/\n/g, '<br />') }}
        >
          {/* Content is set via dangerouslySetInnerHTML to render <strong> and <br /> tags */}
        </StoryText>

        <WhoKnewContainer ref={ref}>
          {isInView && (
            <>
              <PlayfulShape variants={shapeVariants} initial="hidden" animate="visible" aria-hidden="true" />
              <WhoKnewStyledText variants={whoKnewVariants} initial="hidden" animate="visible">
                Who Knew?
              </WhoKnewStyledText>
            </>
          )}
        </WhoKnewContainer>
      </motion.div>
    </StoryWrapper>
  );
};

export default StorySection;
